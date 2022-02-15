import React, { useState } from 'react';
import TaskType from '../../common/types/task-type';
import { useActions } from '../../modules/redux/hooks/use-actions';
import Task from '../task';

interface ITaskContainerProps {
  task: TaskType;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskContainer = ({
  task,
  setBoardIsActive,
}: ITaskContainerProps): JSX.Element => {
  const [activeTaskTitleUpdate, setActiveTaskTitleUpdate] = useState(false);
  const [titleTaskUpdate, setTitleTaskUpdate] = useState(task.title);
  const { updateTask, deleteTask } = useActions();

  const openTaskTitleUpdate = () => {
    setActiveTaskTitleUpdate(true);
    setBoardIsActive(true);
  };

  const saveTaskTitleUpdate = (title: string) => {
    console.log('task__container saveTaskTitleUpdate');
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

  const deleteTaskFromBoard = () => {
    console.log('task__container - deleteTaskFromBoard');
    setActiveTaskTitleUpdate(false);
    setBoardIsActive(false);
    deleteTask(task.boardId!, task.id);
  };

  return (
    <Task
      title={task.title}
      activeTaskTitleUpdate={activeTaskTitleUpdate}
      openTaskTitleUpdate={openTaskTitleUpdate}
      saveTaskTitleUpdate={saveTaskTitleUpdate}
      closeTaskTitleUpdate={closeTaskTitleUpdate}
      titleTaskUpdate={titleTaskUpdate}
      setTitleTaskUpdate={setTitleTaskUpdate}
      deleteTaskFromBoard={deleteTaskFromBoard}
    />
  );
};

export default TaskContainer;
