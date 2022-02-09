import { Card, Button } from 'antd';
import React, { useState } from 'react';
import TaskType from '../../common/types/task-type';
import Task from '../task';
import AutosizeTextArea from '../ui/autosize-text-area';
import AddPanel from '../ui/add-panel';
import './column.scss';

interface IColumnProps {
  id: string;
  title: string;
  order: number | null;
  tasks: TaskType[];
  boardIsActive: boolean;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  addTaskToServer: React.Dispatch<React.SetStateAction<any>>;
}

const Column = ({
  id,
  title,
  order,
  tasks,
  boardIsActive,
  setBoardIsActive,
  addTaskToServer,
}: IColumnProps): JSX.Element => {
  const [activeNewTask, setactiveNewTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const renderTasks = (columnTasks: TaskType[]) =>
    columnTasks
      .sort((a, b) => a.order - b.order)
      .map((t) => (
        <Task key={t.id} tasks={t} setBoardIsActive={setBoardIsActive}></Task>
      ));

  const openAddTask = () => {
    console.log('column - openAddTask');
    if (!boardIsActive) {
      setactiveNewTask(true);
      setBoardIsActive(true);
    }
  };

  const addTask = () => {
    console.log('column - addTask');
    addTaskToServer(true);
    setactiveNewTask(false);
    setBoardIsActive(false);
  };

  const closeTask = () => {
    console.log('column - closeTask');
    setactiveNewTask(false);
    setBoardIsActive(false);
  };

  return (
    <Card className="column">
      <div
        className={activeNewTask ? 'overlay active' : 'overlay'}
        onClick={() => closeTask()}
      ></div>
      {title}
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
          columnId={id}
          order={tasks.length}
        ></AddPanel>
      ) : (
        <Button block onClick={() => openAddTask()}>
          Add a card
        </Button>
      )}
    </Card>
  );
};

export default Column;
