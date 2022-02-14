import { Reducer } from 'redux';
import { ColumnsType } from 'antd/lib/table';
import BoardType from '../../../common/types/board-type';
import TaskType from '../../../common/types/task-type';
import { AuthAction, AuthActionTypes } from '../action-types';

export interface IAuthState {
  userId: string;
  userName: string;
  isAuth: boolean;
}

export const initialState: IAuthState = {
  userId: '',
  userName: '',
  isAuth: true,
};

export const authReducer: Reducer<IAuthState, AuthAction> = (
  state: IAuthState = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        userId: action.payload.id,
        name: action.payload.name,
        isAuth: true,
      };
    default:
      return state;
  }
};
