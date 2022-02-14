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
  const [boardIsActive, setBoardIsActive] = useState(false);

  const getCurrentBoard = (id: string) => {
    setCurrentBoard(boards.find((e) => e.id === id)!);
  };

  useEffect(() => {
    console.log('useEffect board__container');
    getCurrentBoard(boardId!);
  }, [boardId]);

  return (
    <Board
      board={currentBoard}
      boardIsActive={boardIsActive}
      setBoardIsActive={setBoardIsActive}
    ></Board>
  );
};

export default BoardContainer;
