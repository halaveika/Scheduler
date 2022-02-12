import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BoardType from '../../common/types/board-type';
import { getBoardsSelector } from '../../modules/redux/content/content-selectors';
import Board from '../board';

const BoardContainer = (): JSX.Element => {
  const boards = useSelector(getBoardsSelector);
  const { boardId } = useParams<string>();
  const [currentBoard, setCurrentBoard] = useState<BoardType>({
    id: '',
    title: '',
    columns: [],
  });

  const getCurrentBoard = (id: string) => {
    setCurrentBoard(boards.find((e) => e.id === id)!);
  };

  useEffect(() => {
    getCurrentBoard(boardId!);
  }, [boardId]);

  return <Board board={currentBoard}></Board>;
};

export default BoardContainer;
