import { Layout } from 'antd';
import React, { useEffect } from 'react';
import BoardType from '../../common/types/board-type';
import BoardListItem from '../board-list__item';

interface IBoardListProps {
  boards?: BoardType[];
  getBoards: React.Dispatch<React.SetStateAction<void>>
}

const BoardList = ({
  boards = [],
  getBoards,
}: IBoardListProps): JSX.Element => {
  useEffect(() => {
    getBoards();
  }, []);
  const renderBoardItems = boards.map((b) => (
    <BoardListItem key={b.id} id={b.id} title={b.title}></BoardListItem>
  ));
  return <Layout>{renderBoardItems}</Layout>;
};

export default BoardList;
