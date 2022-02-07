import { Card, Button } from 'antd';
import React, { FunctionComponent } from 'react';
import TaskType from '../../common/types/task-type';
import Task from '../task';
import './column.scss';

interface IColumnProps {
  id: string;
  title: string;
  order: number | null;
  tasks: TaskType[];
}

const Column = ({ id, title, order, tasks }: IColumnProps): JSX.Element => {
  const renderTasks = (columnTasks: TaskType[]) =>
    columnTasks
      .sort((a, b) => a.order - b.order)
      .map((t) => <Task key={t.id} {...t}></Task>);

  return (
    <Card className="column">
      {title}
      {renderTasks(tasks)}
      <Button block>Add a card</Button>
    </Card>
  );
};

export default Column;
