import Layout from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import BoardType from '../../common/types/board-type';
import './board.scss';
import ColumnContainer from '../column__container';
import TaskType from '../../common/types/task-type';
import ColumnCreatePopup from '../column-create__popup';

interface IBoardProps {
  board: BoardType;
  boardIsActive: boolean;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: TaskType | null;
  setCurrentTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
  overedTask: { columnId: string | null; order: number };
  setOveredTask: React.Dispatch<
    React.SetStateAction<{ columnId: string | null; order: number }>
  >;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board = ({
  board,
  boardIsActive,
  setBoardIsActive,
  currentTask,
  setCurrentTask,
  overedTask,
  setOveredTask,
  isModalVisible,
  setIsModalVisible,
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
      currentTask={currentTask}
      setCurrentTask={setCurrentTask}
      overedTask={overedTask}
      setOveredTask={setOveredTask}
    ></ColumnContainer>
  ));

  return (
    <Layout
      className={boardIsActive ? 'board__container active' : 'board__container'}
    >
      {renderColumns}
      <ColumnCreatePopup
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        board={board}
      >
        <div className="create-column__btn">
          <span>Create new column</span>
        </div>
      </ColumnCreatePopup>
    </Layout>
  );
};

export default Board;
