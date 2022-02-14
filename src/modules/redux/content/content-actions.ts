import { Dispatch } from 'redux';
import { ContentAction, ContentActionTypes } from '../action-types';
import HttpService from '../../api/httpService';
import TaskType from '../../../common/types/task-type';

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
      dispatch({ type: ContentActionTypes.UPDATE_TASK, payload: json });
    },
};
