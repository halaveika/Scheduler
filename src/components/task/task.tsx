import { Card } from 'antd';
import React, { DragEvent } from 'react';
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
  dragOverTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
  dragLeaveTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
  dragStartTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
  dragEndTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
  dropTaskHandler: (e: DragEvent<HTMLDivElement>) => void;
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
  dragOverTaskHandler,
  dragLeaveTaskHandler,
  dragStartTaskHandler,
  dragEndTaskHandler,
  dropTaskHandler,
}: ITaskProps): JSX.Element => {
  return (
    <Card
      className="task"
      draggable={true}
      onDragOver={(e) => dragOverTaskHandler(e)}
      onDragLeave={(e) => dragLeaveTaskHandler(e)}
      onDragStart={(e) => dragStartTaskHandler(e)}
      onDragEnd={(e) => dragEndTaskHandler(e)}
      onDrop={(e) => dropTaskHandler(e)}
    >
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
