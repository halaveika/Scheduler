import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getBoards = (state:RootState) => state.content.boards

export const getColumns = (state:RootState) => state.content.columns

export const getTasks = (state:RootState) => state.content.tasks