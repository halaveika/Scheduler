import Layout from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import BoardType from '../../common/types/board-type';
import './board.scss';
import ColumnContainer from '../column__container';

interface IBoardProps {
  board: BoardType;
  boardIsActive: boolean;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board = ({
  board,
  boardIsActive,
  setBoardIsActive,
}: IBoardProps): JSX.Element => {
  const { columns, id } = board;

  const renderColumns = columns!.map((e) => (
    <ColumnContainer
      key={e.id!}
      columnId={e.id}
      columnTitle={e.title}
      columnOrder={e.order}
      boardIsActive={boardIsActive}
      setBoardIsActive={setBoardIsActive}
      boardId={id}
    ></ColumnContainer>
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
