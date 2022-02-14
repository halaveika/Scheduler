import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  CombinedState,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import saveToLocalStorage from '../../common/utils/saveToLocalStorage';
import loadFromLocalStorage from '../../common/utils/loadFromLocalStorage';
import contentReducer from './content';
import authReducer from './auth';

const presistedState = loadFromLocalStorage();

export const rootReducer = combineReducers({
  content: contentReducer,
  auth: authReducer,
});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  presistedState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
