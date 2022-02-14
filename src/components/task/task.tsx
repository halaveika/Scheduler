import { Card } from 'antd';
import React, { useState } from 'react';
import TaskType from '../../common/types/task-type';
import { useActions } from '../../modules/redux/hooks/use-actions';
import TaskTitleUpdate from '../task__title-update';
import './task.scss';

interface ITaskProps {
  task: TaskType;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Task = ({ task, setBoardIsActive }: ITaskProps): JSX.Element => {
  const [activeTaskTitleUpdate, setActiveTaskTitleUpdate] = useState(false);
  const [titleTaskUpdate, setTitleTaskUpdate] = useState(task.title);
  const { updateTask } = useActions();

  const openTaskTitleUpdate = () => {
    setActiveTaskTitleUpdate(true);
    setBoardIsActive(true);
  };

  const saveTaskTitleUpdate = (title: string) => {
    console.log('task__title-update saveTaskTitleUpdate');
    console.log(task);
    setActiveTaskTitleUpdate(false);
    setBoardIsActive(false);
    updateTask(task.boardId!, { ...task, title });
  };

  const closeTaskTitleUpdate = () => {
    setActiveTaskTitleUpdate(false);
    setBoardIsActive(false);
    setTitleTaskUpdate(task.title);
  };
  return (
    <Card className="task">
      <TaskTitleUpdate
        title={task.title}
        activeTaskTitleUpdate={activeTaskTitleUpdate}
        openTaskTitleUpdate={openTaskTitleUpdate}
        saveTaskTitleUpdate={saveTaskTitleUpdate}
        closeTaskTitleUpdate={closeTaskTitleUpdate}
        titleTaskUpdate={titleTaskUpdate}
        setTitleTaskUpdate={setTitleTaskUpdate}
      />
    </Card>
  );
};

export default Task;
