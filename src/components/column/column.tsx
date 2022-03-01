import { Card, Button } from 'antd';
import React, { DragEvent } from 'react';
import TaskType from '../../common/types/task-type';
import TaskContainer from '../task__container';
import AutosizeTextArea from '../_ui/autosize-text-area';
import AddPanel from '../_ui/add-panel';
import './column.scss';

interface IColumnProps {
  boardIsActive: boolean;
  activeNewTask: boolean;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  newTaskTitle: string;
  addTask: (
    task: Omit<TaskType, 'id' | 'title' | 'description' | 'userId' | 'boardId'>,
  ) => void;
  openAddTask: () => void;
  closeTask: () => void;
  tasks: TaskType[];
  columnId: string;
  columnTitle: string;
  columnOrder: number | null;
  currentTask: TaskType | null;
  setCurrentTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
  overedTask: { columnId: string | null; order: number };
  setOveredTask: React.Dispatch<
    React.SetStateAction<{ columnId: string | null; order: number }>
  >;
  dragOverTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
  dragDropTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
  dragLeaveTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
}

const Column = ({
  addTask,
  openAddTask,
  newTaskTitle,
  setNewTaskTitle,
  closeTask,
  activeNewTask,
  boardIsActive,
  setBoardIsActive,
  tasks,
  columnId,
  columnTitle,
  columnOrder,
  currentTask,
  setCurrentTask,
  overedTask,
  setOveredTask,
  dragOverTaskHandler,
  dragDropTaskHandler,
  dragLeaveTaskHandler,
}: IColumnProps): JSX.Element => {
  const renderTasks = (columnTasks: TaskType[]) =>
    columnTasks
      .sort((a, b) => a.order - b.order)
      .map((t) => (
        <TaskContainer
          key={t.id}
          task={t}
          setBoardIsActive={setBoardIsActive}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          overedTask={overedTask}
          setOveredTask={setOveredTask}
        ></TaskContainer>
      ));

  return (
    <Card
      className="column"
      onDragOver={dragOverTaskHandler}
      onDragLeave={dragLeaveTaskHandler}
      onDrop={dragDropTaskHandler}
    >
      <div
        className={activeNewTask ? 'column__overlay active' : 'column__overlay'}
        onClick={() => closeTask()}
      ></div>
      <span className="column-title">{columnTitle}</span>
      {renderTasks(tasks)}
      {activeNewTask ? (
        <>
          <AutosizeTextArea
            setClass="title-update__area"
            outerValue={newTaskTitle}
            setOuterValue={setNewTaskTitle}
          ></AutosizeTextArea>
        </>
      ) : (
        ''
      )}
      {activeNewTask ? (
        <AddPanel
          add={addTask}
          close={closeTask}
          columnId={columnId}
          order={tasks.length}
        ></AddPanel>
      ) : (
        <Button className="add-card__btn" block onClick={() => openAddTask()}>
          Add a card
        </Button>
      )}
    </Card>
  );
};

export default Column;
