import Layout from 'antd/lib/layout/layout';
import React from 'react';
import BoardType from '../../common/types/board-type';
import './board-page.scss';
import BoardMock from '../../../config/jest/mocks/board-mock';
import Column from '../../components/column';
import TasksMock from '../../../config/jest/mocks/tasks-mock';

const BoardPage = (): JSX.Element => {
  const { columns } = BoardMock;
  const renderColumns = columns!.map((e) => (
    <Column
      key={e.id!}
      {...e}
      tasks={TasksMock.filter((t) => t.columnId === e.id)}
    ></Column>
  ));
  return <Layout className="board-page__container">{renderColumns}</Layout>;
};

export default BoardPage;
