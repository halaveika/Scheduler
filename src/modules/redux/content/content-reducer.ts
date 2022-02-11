import {
  Reducer
} from 'redux';
import { ColumnsType } from "antd/lib/table";
import BoardType from "../../../common/types/board-type";
import TaskType from "../../../common/types/task-type";
import { ContentAction,ContentActionTypes } from "../action-types";


export interface IContentState{
  boards: BoardType[],
  columns:ColumnsType[],
  tasks: TaskType[],
}

export const initialState: IContentState = {
  boards: [],
  columns: [],
  tasks: [],
};

export const contentReducer:Reducer<IContentState,ContentAction> = (state:IContentState = initialState, action: ContentAction) => {
  switch (action.type) {
    case ContentActionTypes.GET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    case ContentActionTypes.GET_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case ContentActionTypes.CREATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
  
      };
    case ContentActionTypes.UPDATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    case ContentActionTypes.DELETE_BOARD:
      return {
        ...state,
        boards: action.payload,
      };
    case ContentActionTypes.GET_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    case ContentActionTypes.CREATE_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
  
      };
    case ContentActionTypes.UPDATE_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case ContentActionTypes.DELETE_COLUMN:
      return {
        ...state,
        columns: action.payload,
      };
    case ContentActionTypes.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ContentActionTypes.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]}
    case ContentActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ContentActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
