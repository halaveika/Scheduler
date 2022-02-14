import { ContentActionCreators } from './content/content-actions';
import { AuthActionCreators } from './auth/auth-actions';

export const allActionCreators = {
  ...ContentActionCreators,
  ...AuthActionCreators,
};
