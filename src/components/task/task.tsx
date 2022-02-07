import { Card, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import TaskType from '../../common/types/task-type';
import './task.scss';

const Task = (tasks: TaskType): JSX.Element => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <Card className="task">
      <Button
        size={'small'}
        className="update-btn"
        onClick={() => setActive(true)}
      >
        <EditOutlined />
      </Button>
      <span>{tasks.title}</span>
      <p></p>
      <Button type="primary" className="save-btn">
        Save
      </Button>
    </Card>
  );
};

export default Task;
