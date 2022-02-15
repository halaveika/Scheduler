import { Card } from 'antd';
import React from 'react';
import TaskTitleUpdate from '../task__title-update';
import './task.scss';

interface ITaskProps {
  title: string;
  activeTaskTitleUpdate: boolean;
  openTaskTitleUpdate: () => void;
  saveTaskTitleUpdate: (title: string) => void;
  closeTaskTitleUpdate: () => void;
  titleTaskUpdate: string;
  setTitleTaskUpdate: React.Dispatch<React.SetStateAction<string>>;
  deleteTaskFromBoard: () => void;
}

const Task = ({
  title,
  setTitleTaskUpdate,
  activeTaskTitleUpdate,
  openTaskTitleUpdate,
  saveTaskTitleUpdate,
  closeTaskTitleUpdate,
  titleTaskUpdate,
  deleteTaskFromBoard,
}: ITaskProps): JSX.Element => {
  return (
    <Card className="task">
      <TaskTitleUpdate
        title={title}
        activeTaskTitleUpdate={activeTaskTitleUpdate}
        openTaskTitleUpdate={openTaskTitleUpdate}
        saveTaskTitleUpdate={saveTaskTitleUpdate}
        closeTaskTitleUpdate={closeTaskTitleUpdate}
        titleTaskUpdate={titleTaskUpdate}
        setTitleTaskUpdate={setTitleTaskUpdate}
        deleteTaskFromBoard={deleteTaskFromBoard}
      />
    </Card>
  );
};

export default Task;
