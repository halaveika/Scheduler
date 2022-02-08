import { Card } from 'antd';
import React, { useState } from 'react';
import TaskType from '../../common/types/task-type';
import TaskTitleUpdate from '../task__title-update';
import './task.scss';

interface ITaskProps {
  tasks: TaskType;
  boardIsActive: boolean;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Task = ({
  tasks,
  boardIsActive,
  setBoardIsActive,
}: ITaskProps): JSX.Element => {
  return (
    <Card className="task">
      <TaskTitleUpdate
        active={boardIsActive}
        setActive={setBoardIsActive}
        title={tasks.title}
      />
    </Card>
  );
};

export default Task;
