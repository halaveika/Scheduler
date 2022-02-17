import React, { useEffect, useState } from 'react';
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
}

const ColumnContainer = ({
  columnId,
  columnTitle,
  columnOrder,
  boardId,
  boardIsActive,
  setBoardIsActive,
}: IColumnContainerProps): JSX.Element => {
  const [activeNewTask, setactiveNewTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const { tasks = [] } = useTypedSelector((state) => state.content);

  const { userId } = useTypedSelector((state) => state.auth);

  const { createTask, getTasks } = useActions();

  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);
  const [overedTask, setOveredTask] = useState<TaskType | null>(null);

  useEffect(() => {
    console.log('useEffect column__container');
    getTasks(boardId!);
  }, [newTaskTitle]);

  const openAddTask = () => {
    console.log('column__container - openAddTask');
    if (!boardIsActive) {
      setactiveNewTask(true);
      setBoardIsActive(true);
    }
  };

  const addTask = (
    task: Omit<TaskType, 'id' | 'title' | 'description' | 'userId' | 'boardId'>,
  ) => {
    console.log('column__container - addTask');
    addTaskToServer(task);
    setactiveNewTask(false);
    setBoardIsActive(false);
    setNewTaskTitle('');
  };

  const closeTask = () => {
    console.log('column__container - closeTask');
    setactiveNewTask(false);
    setBoardIsActive(false);
    setNewTaskTitle('');
  };

  const addTaskToServer = (
    task: Omit<TaskType, 'id' | 'title' | 'description' | 'userId' | 'boardId'>,
  ) => {
    console.log('column__container - addTaskToServer');
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
      tasks={tasks.filter((t) => t.columnId === columnId)}
      columnId={columnId}
      columnTitle={columnTitle}
      columnOrder={columnOrder}
      currentTask={currentTask}
      setCurrentTask={setCurrentTask}
      overedTask={overedTask}
      setOveredTask={setOveredTask}
    ></Column>
  );
};

export default ColumnContainer;
