import React from 'react';
import BoardListPage from '../../pages/board-list-page';
import BoardPage from '../../pages/board-page';

const routes = [
  { path: '/', element: <BoardListPage></BoardListPage> },
  {
    path: '/boards/',
    element: <BoardPage></BoardPage>,
  },
];

export default routes;
