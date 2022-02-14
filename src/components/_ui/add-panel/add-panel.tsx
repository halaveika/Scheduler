import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import './add-panel.scss';
import TaskType from '../../../common/types/task-type';

interface IAddPanelProps {
  columnId: string;
  order: number;
  add: (
    task: Omit<TaskType, 'id' | 'title' | 'description' | 'userId' | 'boardId'>,
  ) => void;
  close: () => void;
}

const AddPanel = ({
  columnId,
  order,
  add,
  close,
}: IAddPanelProps): JSX.Element => {
  return (
    <div className="add-panel__container">
      <Button
        type="primary"
        size={'middle'}
        onClick={() => add({ columnId, order })}
      >
        Add a card
      </Button>
      <Button
        className="close-btn"
        ghost
        size={'middle'}
        onClick={() => close()}
      >
        <CloseOutlined />
      </Button>
    </div>
  );
};

export default AddPanel;
