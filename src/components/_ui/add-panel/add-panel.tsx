import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import './add-panel.scss';

interface IAddPanelProps {
  columnId: string;
  order: number;
  add: React.Dispatch<React.SetStateAction<boolean>>;
  close: React.Dispatch<React.SetStateAction<void>>;
}

const AddPanel = ({
  columnId,
  order,
  add,
  close,
}: IAddPanelProps): JSX.Element => {
  return (
    <div className="add-panel__container">
      <Button type="primary" size={'middle'} onClick={() => add(true)}>
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
