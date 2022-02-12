import Layout from 'antd/lib/layout/layout';
import React from 'react';
import './board-page.scss';
import BoardContainer from '../../components/board__container';

const BoardPage = (): JSX.Element => {
  console.log('Board-page!');
  return (
    <Layout>
      <BoardContainer></BoardContainer>
    </Layout>
  );
};

export default BoardPage;
