import Layout from 'antd/lib/layout/layout';
import React from 'react';
import './board-list-page.scss';
import BoardListContainer from '../../components/board-list__container';

const BoardListPage = (): JSX.Element => {
  console.log('Board-list-page!');
  return (
    <Layout className="page-container">
      <BoardListContainer></BoardListContainer>
    </Layout>
  );
};

export default BoardListPage;
