import { ColumnsType } from 'antd/lib/table';
import BoardType from '../../common/types/board-type';
import TaskType from '../../common/types/task-type';
import UserType from '../../common/types/user-type';

export enum AuthActionTypes {
  GET_USERS = 'AUTH/GET_USERS',
  GET_USER = 'AUTH/GET_USER',
  CREATE_USER = 'AUTH/CREATE_USER',
  UPDATE_USER = 'AUTH/UPDATE_USER',
  DELETE_USER = 'AUTH/DELETE_USER',
}

export interface GetUsers {
  type: AuthActionTypes.GET_USERS;
  payload: UserType[];
}

export interface GetUser {
  type: AuthActionTypes.GET_USER;
  payload: UserType;
}

export interface CreateUser {
  type: AuthActionTypes.CREATE_USER;
  payload: UserType;
}

export interface UpdateUser {
  type: AuthActionTypes.UPDATE_USER;
  payload: UserType;
}

export interface DeleteUser {
  type: AuthActionTypes.DELETE_USER;
  payload: UserType;
}

export type AuthAction =
  | GetUsers
  | GetUser
  | CreateUser
  | UpdateUser
  | DeleteUser;

export enum ContentActionTypes {
  GET_BOARDS = 'CONTENT/GET_BOARDS',
  GET_BOARD = 'CONTENT/GET_BOARD',
  CREATE_BOARD = 'CONTENT/CREATE_BOARD',
  UPDATE_BOARD = 'CONTENT/UPDATE_BOARD',
  DELETE_BOARD = 'CONTENT/DELETE_BOARD',
  GET_COLUMNS = 'CONTENT/GET_COLUMNS',
  GET_COLUMN = 'CONTENT/GET_COLUMN',
  CREATE_COLUMN = 'CONTENT/CREATE_COLUMN',
  UPDATE_COLUMN = 'CONTENT/UPDATE_COLUMN',
  DELETE_COLUMN = 'CONTENT/DELETE_COLUMN',
  GET_TASKS = 'CONTENT/GET_TASKS',
  GET_TASK = 'CONTENT/GET_TASK',
  CREATE_TASK = 'CONTENT/CREATE_TASK',
  UPDATE_TASK = 'CONTENT/UPDATE_TASK',
  DELETE_TASK = 'CONTENT/DELETE_TASK',
}

export interface GetBoards {
  type: ContentActionTypes.GET_BOARDS;
  payload: BoardType[];
}

export interface GetBoard {
  type: ContentActionTypes.GET_BOARD;
  payload: BoardType;
}

export interface CreateBoard {
  type: ContentActionTypes.CREATE_BOARD;
  payload: BoardType;
}

export interface UpdateBoard {
  type: ContentActionTypes.UPDATE_BOARD;
  payload: BoardType;
}

export interface DeleteBoard {
  type: ContentActionTypes.DELETE_BOARD;
  payload: BoardType[];
}

export interface GetColumns {
  type: ContentActionTypes.GET_COLUMNS;
  payload: ColumnsType[];
}

export interface GetColumn {
  type: ContentActionTypes.GET_COLUMN;
  payload: ColumnsType;
}

export interface CreateColumn {
  type: ContentActionTypes.CREATE_COLUMN;
  payload: ColumnsType;
}

export interface UpdateColumn {
  type: ContentActionTypes.UPDATE_COLUMN;
  payload: ColumnsType;
}

export interface DeleteColumn {
  type: ContentActionTypes.DELETE_COLUMN;
  payload: ColumnsType[];
}

export interface GetTasks {
  type: ContentActionTypes.GET_TASKS;
  payload: TaskType[];
}

export interface GetTask {
  type: ContentActionTypes.GET_TASK;
  payload: TaskType;
}

export interface CreateTask {
  type: ContentActionTypes.CREATE_TASK;
  payload: TaskType;
}

export interface UpdateTask {
  type: ContentActionTypes.UPDATE_TASK;
  payload: TaskType;
}

export interface DeleteTask {
  type: ContentActionTypes.DELETE_TASK;
  payload: TaskType[];
}

export type ContentAction =
  | GetBoards
  | GetBoard
  | CreateBoard
  | UpdateBoard
  | DeleteBoard
  | GetColumns
  | GetColumn
  | CreateColumn
  | UpdateColumn
  | DeleteColumn
  | GetTasks
  | GetTask
  | CreateTask
  | UpdateTask
  | DeleteTask;
