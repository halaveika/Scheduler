import { Dispatch } from 'redux';
import { ContentAction, ContentActionTypes } from '../action-types';
import HttpService from '../../api/httpService';
import TaskType from '../../../common/types/task-type';
import { RootState } from '../store';

export const ContentActionCreators = {
  getBoards: () => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getBoards();
    dispatch({ type: ContentActionTypes.GET_BOARDS, payload: json });
  },

  getBoard: (id: string) => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getBoard(id);
    dispatch({ type: ContentActionTypes.GET_BOARD, payload: json });
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
      const tasksUpdate = tasks
        .filter(
          (t) =>
            t.order >= newOrder && t.id !== task.id && columnId === t.columnId,
        )
        .map((t) => ({ ...t, order: t.order + 1 }))
        .concat([{ ...task, order: newOrder, columnId }])
        .concat(
          tasks
            .filter((t) => t.order > task.order && task.columnId === t.columnId)
            .map((t) => ({ ...t, order: t.order - 1 })),
        );
      const json = await Promise.all(
        tasksUpdate.map((t) => HttpService.updateTask(t.boardId!, t)),
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
