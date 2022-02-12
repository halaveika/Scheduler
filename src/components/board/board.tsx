import Layout from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import BoardType from '../../common/types/board-type';
import './board.scss';
import Column from '../column';
import TasksMock from '../../../config/jest/mocks/tasks-mock';

interface IBoardProps {
  board: BoardType;
}

const Board = ({ board }: IBoardProps): JSX.Element => {
  const { columns } = board;
  const [boardIsActive, setBoardIsActive] = useState(false);
  const addTaskToServer = (x: any) => {
    console.log('addTaskToServer');
    console.log(x);
  };
  const renderColumns = columns!.map((e) => (
    <Column
      key={e.id!}
      {...e}
      tasks={TasksMock.filter((t) => t.columnId === e.id)}
      boardIsActive={boardIsActive}
      setBoardIsActive={setBoardIsActive}
      addTaskToServer={addTaskToServer}
    ></Column>
  ));
  return (
    <Layout
      className={boardIsActive ? 'board__container active' : 'board__container'}
    >
      {renderColumns}
    </Layout>
  );
};

export default Board;
