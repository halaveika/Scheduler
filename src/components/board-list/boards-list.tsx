import { Layout } from 'antd';
import React from 'react';
import BoardType from '../../common/types/board-type';
import BoardListItem from '../board-list__item';

interface IBoardListProps {
  boards?: BoardType[];
}

const BoardList = ({ boards = [] }: IBoardListProps): JSX.Element => {
  const renderBoardItems = boards.map((b) => (
    <BoardListItem key={b.id} id={b.id} title={b.title}></BoardListItem>
  ));
  return <Layout>{renderBoardItems}</Layout>;
};

export default BoardList;
