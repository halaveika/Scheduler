import { Dispatch } from 'redux';
import { AuthAction, AuthActionTypes } from '../action-types';
import HttpService from '../../api/httpService';

export const AuthActionCreators = {
  login:
    (login: string, password: string) =>
    async (dispatch: Dispatch<AuthAction>) => {
      const json = await HttpService.Login(login, password);
      console.log(json);
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: {
          userId: '67f22cc7-1e06-4ae2-902d-b55da9d8d2d1',
          name: 'admin',
        },
      });
    },
};
