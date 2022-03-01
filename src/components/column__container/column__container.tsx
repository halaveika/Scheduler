import React, { useEffect, useState, DragEvent } from 'react';
import TaskType from '../../common/types/task-type';
import { useTypedSelector } from '../../modules/redux/hooks/use-typed-selector';
import { useActions } from '../../modules/redux/hooks/use-actions';
import Column from '../column';

interface IColumnContainerProps {
  columnId: string;
  columnTitle: string;
  columnOrder: number | null;
  boardId: string;
  boardIsActive: boolean;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: TaskType | null;
  setCurrentTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
  overedTask: { columnId: string | null; order: number };
  setOveredTask: React.Dispatch<
    React.SetStateAction<{ columnId: string | null; order: number }>
  >;
}

const ColumnContainer = ({
  columnId,
  columnTitle,
  columnOrder,
  boardId,
  boardIsActive,
  setBoardIsActive,
  currentTask,
  setCurrentTask,
  overedTask,
  setOveredTask,
}: IColumnContainerProps): JSX.Element => {
  const [activeNewTask, setactiveNewTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const { tasks = [] } = useTypedSelector((state) => state.content);

  const currentTasks = tasks.filter((t) => t.columnId === columnId);

  const { userId } = useTypedSelector((state) => state.auth);

  const { createTask, getTasks } = useActions();

  const openAddTask = () => {
    if (!boardIsActive) {
      setactiveNewTask(true);
      setBoardIsActive(true);
    }
  };

  const addTask = (
    task: Omit<TaskType, 'id' | 'title' | 'description' | 'userId' | 'boardId'>,
  ) => {
    if (newTaskTitle !== '') {
      addTaskToServer(task);
      setactiveNewTask(false);
      setBoardIsActive(false);
      setNewTaskTitle('');
    }
  };

  const closeTask = () => {
    setactiveNewTask(false);
    setBoardIsActive(false);
    setNewTaskTitle('');
  };

  const addTaskToServer = (
    task: Omit<TaskType, 'id' | 'title' | 'description' | 'userId' | 'boardId'>,
  ) => {
    const newTask = {
      ...task,
      title: newTaskTitle,
      columnId,
      boardId,
      userId,
      description: '',
    };
    createTask(boardId, newTask);
  };

  const dragOverTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (
      currentTasks.length === 0 &&
      e.target &&
      (e.target as HTMLDivElement).className.includes('ant-card-body')
    ) {
      console.log('column_container dragOverTaskHandler');
      (e.target as HTMLDivElement).classList.add('empty');
    }
  };

  const dragLeaveTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLDivElement).classList.remove('empty');
  };

  const dragDropTaskHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (
      currentTasks.length === 0 &&
      columnId &&
      e.target &&
      (e.target as HTMLDivElement).className.includes('ant-card-body empty')
    ) {
      console.log('column_container dragDropTaskHandler');
      setOveredTask({ columnId, order: 0 });
      (e.target as HTMLDivElement).classList.remove('empty');
    }
  };

  // const dragOverColumnHandler = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   if ((e.currentTarget as HTMLDivElement).className.includes('task')) {
  //     (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 3px gray';
  //   }
  // };

  // const dragLeaveColumnHandler = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
  // };

  // const dragStartColumnHandler = (e: DragEvent<HTMLDivElement>) => {
  //   setCurrentTask(task);
  // };

  // const dragEndColumnHandler = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   if (overedTask.columnId) {
  //     console.log('updateColumn')
  //     // updateTasks(overedTask!.order, currentTask!, overedTask!.columnId!);
  //   }
  //   setOveredTask({ columnId: null, order: 0 });
  // };

  // const dropColumnHandler = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setOveredTask({ columnId: '', order: task.order });
  //   (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
  // };

  return (
    <Column
      boardIsActive={boardIsActive}
      addTask={addTask}
      openAddTask={openAddTask}
      newTaskTitle={newTaskTitle}
      setNewTaskTitle={setNewTaskTitle}
      closeTask={closeTask}
      activeNewTask={activeNewTask}
      setBoardIsActive={setBoardIsActive}
      tasks={currentTasks}
      columnId={columnId}
      columnTitle={columnTitle}
      columnOrder={columnOrder}
      currentTask={currentTask}
      setCurrentTask={setCurrentTask}
      overedTask={overedTask}
      setOveredTask={setOveredTask}
      dragOverTaskHandler={dragOverTaskHandler}
      dragDropTaskHandler={dragDropTaskHandler}
      dragLeaveTaskHandler={dragLeaveTaskHandler}
    ></Column>
  );
};

export default ColumnContainer;
