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
    setActiveTaskTitleUpdate(false);
    setBoardIsActive(false);
    deleteTask(task.boardId!, task.id);
  };

  const dragOverTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if ((e.currentTarget as HTMLDivElement).className.includes('task')) {
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 3px gray';
    }
  };

  const dragLeaveTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
  };

  const dragStartTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    setCurrentTask(task);
  };

  const dragEndTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('task_container dragEndTaskHandler');
    console.log('overedTask.order: ' + overedTask.order);
    console.log('overedTask.columnId: ' + overedTask.columnId);
    if (overedTask.columnId) {
      updateTasks(overedTask!.order, currentTask!, overedTask!.columnId!);
    }
    setOveredTask({ columnId: null, order: 0 });
  };

  const dropTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('task_container dropTaskHandler');
    console.log('overedTask.order: ' + task.order);
    setOveredTask({ columnId: task.columnId, order: task.order });
    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
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
