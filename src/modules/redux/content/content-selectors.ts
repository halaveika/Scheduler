import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getBoardsSelector = (state: RootState) => state.content.boards;

export const getColumnsSelector = (state: RootState) => state.content.columns;

export const getTasksSelector = (state: RootState) => state.content.tasks;
