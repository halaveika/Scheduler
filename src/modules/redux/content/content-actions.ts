import { Dispatch } from 'redux';
import { ContentAction, ContentActionTypes } from '../action-types';
import HttpService from '../../api/httpService';
import TaskType from '../../../common/types/task-type';
import { RootState } from '../store';
import BoardType from '../../../common/types/board-type';

export const ContentActionCreators = {
  getBoards: () => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getBoards();
    dispatch({ type: ContentActionTypes.GET_BOARDS, payload: json });
  },

  getBoard: (id: string) => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getBoard(id);
    dispatch({ type: ContentActionTypes.GET_BOARD, payload: json });
  },

  createBoard:
    (board: Omit<BoardType, 'id'>) =>
    async (dispatch: Dispatch<ContentAction>) => {
      const json = await HttpService.createBoard(board);
      dispatch({ type: ContentActionTypes.CREATE_BOARD, payload: json });
    },

  updateBoard:
    (board: BoardType) => async (dispatch: Dispatch<ContentAction>) => {
      const json = await HttpService.updateBoard(board);
      dispatch({ type: ContentActionTypes.UPDATE_BOARD, payload: json });
    },

  deleteBoard:
    (boardId: string) => async (dispatch: Dispatch<ContentAction>) => {
      try {
        const json = await HttpService.deleteBoard(boardId);
        if (json) {
          console.log('content-action - deleteBoard: ' + json);
          console.log('content-action - deleteBoard: ' + boardId);
          dispatch({ type: ContentActionTypes.DELETE_BOARD, payload: boardId });
        } else {
          throw new Error();
        }
      } catch (error) {
        throw new Error('Not Deleted');
      }
    },

  getTasks: (boardId: string) => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getTasks(boardId);
    dispatch({ type: ContentActionTypes.GET_TASKS, payload: json });
  },

  getTask:
    (boardId: string, taskId: string) =>
    async (dispatch: Dispatch<ContentAction>) => {
      const json = await HttpService.getTask(boardId, taskId);
      dispatch({ type: ContentActionTypes.GET_TASKS, payload: json });
    },

  createTask:
    (boardId: string, task: Omit<TaskType, 'id'>) =>
    async (dispatch: Dispatch<ContentAction>) => {
      const json = await HttpService.createTask(boardId, task);
      dispatch({ type: ContentActionTypes.CREATE_TASK, payload: json });
    },

  updateTask:
    (boardId: string, task: TaskType) =>
    async (dispatch: Dispatch<ContentAction>) => {
      const json = await HttpService.updateTask(boardId, task);
      console.log(json);
      dispatch({ type: ContentActionTypes.UPDATE_TASK, payload: json });
    },

  updateTasks:
    (newOrder: number, task: TaskType, columnId: string) =>
    async (dispatch: Dispatch<ContentAction>, getState: () => RootState) => {
      const { tasks } = getState().content;
      let tasksUpdate: TaskType[];
      console.log('newOrder: ' + newOrder);
      console.log(task);
      if (task.order >= newOrder) {
        console.log('updateTasks -- if');
        tasksUpdate = tasks
          .filter(
            (t) =>
              columnId === t.columnId &&
              t.order >= newOrder &&
              t.order <= task.order &&
              t.id !== task.id,
          )
          .map((t) => ({ ...t, order: t.order + 1 }))
          .concat([{ ...task, order: newOrder, columnId }]);
      } else {
        console.log('updateTasks -- else');
        tasksUpdate = tasks
          .filter(
            (t) =>
              columnId === t.columnId &&
              t.order <= newOrder &&
              t.order >= task.order &&
              t.id !== task.id,
          )
          .map((t) => ({ ...t, order: t.order - 1 }))
          .concat([{ ...task, order: newOrder, columnId }]);
      }
      console.log(tasksUpdate!);
      console.log(
        tasksUpdate!
          .sort((a, b) => a.order - b.order)
          .map((e) => `${e.title}: ${e.order}`)
          .join(' | '),
      );
      const json = await Promise.all(
        tasksUpdate!.map((t) => HttpService.updateTask(t.boardId!, t)),
      );
      dispatch({ type: ContentActionTypes.UPDATE_TASKS, payload: json });
    },

  deleteTask:
    (boardId: string, taskId: string) =>
    async (dispatch: Dispatch<ContentAction>) => {
      try {
        const json: boolean = await HttpService.deleteTask(boardId, taskId);
        if (json) {
          dispatch({ type: ContentActionTypes.DELETE_TASK, payload: taskId });
        } else {
          throw new Error();
        }
      } catch (error) {
        throw new Error('Not Deleted');
      }
    },
};
