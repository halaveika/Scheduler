import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BoardType from '../../common/types/board-type';
import TaskType from '../../common/types/task-type';
import { getBoardsSelector } from '../../modules/redux/content/content-selectors';
import { useTypedSelector } from '../../modules/redux/hooks/use-typed-selector';
import { useActions } from '../../modules/redux/hooks/use-actions';
import Board from '../board';

const BoardContainer = (): JSX.Element => {
  const { boardId } = useParams<string>();
  const [currentBoard, setCurrentBoard] = useState<BoardType>({
    id: '',
    title: '',
    columns: [],
  });
  const [boardIsActive, setBoardIsActive] = useState(false);

  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);
  const [overedTask, setOveredTask] = useState<{
    columnId: string | null;
    order: number;
  }>({ columnId: null, order: 0 });
  const { getTasks } = useActions();
  const { tasks, boards } = useTypedSelector((state) => state.content);
  const [taskArr, setTaskArr] = useState<TaskType[]>([]);
  console.log(boards);

  const getCurrentBoard = (id: string) => {
    setCurrentBoard(boards.find((e) => e.id === id)!);
  };

  useEffect(() => {
    getCurrentBoard(boardId!);
  }, [boardId]);

  useEffect(() => {
    getTasks(boardId!);
    setTaskArr(tasks);
  }, [taskArr]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Board
      board={currentBoard}
      boardIsActive={boardIsActive}
      setBoardIsActive={setBoardIsActive}
      currentTask={currentTask}
      setCurrentTask={setCurrentTask}
      overedTask={overedTask}
      setOveredTask={setOveredTask}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    ></Board>
  );
};

export default BoardContainer;
