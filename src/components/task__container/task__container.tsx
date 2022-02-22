import React, { DragEvent, useState } from 'react';
import TaskType from '../../common/types/task-type';
import { useActions } from '../../modules/redux/hooks/use-actions';
import Task from '../task';

interface ITaskContainerProps {
  task: TaskType;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: TaskType | null;
  setCurrentTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
  overedTask: { columnId: string | null; order: number };
  setOveredTask: React.Dispatch<
    React.SetStateAction<{ columnId: string | null; order: number }>
  >;
}

const TaskContainer = ({
  task,
  setBoardIsActive,
  currentTask,
  setCurrentTask,
  overedTask,
  setOveredTask,
}: ITaskContainerProps): JSX.Element => {
  const [activeTaskTitleUpdate, setActiveTaskTitleUpdate] = useState(false);
  const [titleTaskUpdate, setTitleTaskUpdate] = useState(task.title);

  const { updateTask, updateTasks, deleteTask } = useActions();

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

  const dragOverTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(
      'task__container - dragOverTaskHandler' + e.currentTarget.className,
    );
    console.log((e.currentTarget as HTMLDivElement).className);
    if ((e.currentTarget as HTMLDivElement).className.includes('task')) {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 3px gray';
    }
  };

  const dragLeaveTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(
      'task__container - dragLeaveTaskHandler ' + e.currentTarget.className,
    );
    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
    console.log(task.order);
  };

  const dragStartTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('task__container - dragStertTaskHandler');
    console.log(task.order);
    setCurrentTask(task);
  };

  const dragEndTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(
      'task__container - dragEndTaskHandler ' + e.currentTarget.className,
    );
    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
    console.log(task.order);
    console.log(overedTask);
    console.log(currentTask);
    updateTasks(overedTask!.order, currentTask!, overedTask!.columnId!);
  };

  const dropTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('task__container - dropTaskHandler');
    console.log(task.order);
    setOveredTask({ columnId: task.columnId!, order: task.order });
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
      dragOverTaskHandler={dragOverTaskHandler}
      dragLeaveTaskHandler={dragLeaveTaskHandler}
      dragStartTaskHandler={dragStartTaskHandler}
      dragEndTaskHandler={dragEndTaskHandler}
      dropTaskHandler={dropTaskHandler}
    />
  );
};

export default TaskContainer;
