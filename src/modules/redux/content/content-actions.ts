import { Dispatch } from 'redux';
import { ContentAction, ContentActionTypes } from '../action-types';
import HttpService from '../../api/httpService';

export const getBoards = () => async (dispatch: Dispatch<ContentAction>) => {
  const json = await HttpService.getBoards();
  dispatch({ type: ContentActionTypes.GET_BOARDS, payload: json });
};

export const getBoard =
  (id: string) => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getBoard(id);
    dispatch({ type: ContentActionTypes.GET_BOARD, payload: json });
  };

export const getTasks =
  (boardId: string) => async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getTasks(boardId);
    dispatch({ type: ContentActionTypes.GET_TASKS, payload: json });
  };

export const getTask =
  (boardId: string, taskId: string) =>
  async (dispatch: Dispatch<ContentAction>) => {
    const json = await HttpService.getTask(boardId, taskId);
    dispatch({ type: ContentActionTypes.GET_TASKS, payload: json });
  };
