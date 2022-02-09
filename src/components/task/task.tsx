import { Card } from 'antd';
import React, { useState } from 'react';
import TaskType from '../../common/types/task-type';
import TaskTitleUpdate from '../task__title-update';
import './task.scss';

interface ITaskProps {
  tasks: TaskType;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Task = ({ tasks, setBoardIsActive }: ITaskProps): JSX.Element => {
  const [taskTitle, setTaskTitle] = useState(tasks.title);
  return (
    <Card className="task">
      <TaskTitleUpdate
        setBoardIsActive={setBoardIsActive}
        title={taskTitle}
        setTaskTitle={setTaskTitle}
      />
    </Card>
  );
};

export default Task;
