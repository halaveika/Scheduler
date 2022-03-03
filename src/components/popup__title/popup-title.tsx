import React from 'react';
import { CreditCardOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './popup-title.scss';
import ColumnType from '../../common/types/column-type';

interface IPopupTitle {
  taskTitle: string;
  updateTaskTitle: (title: string) => void;
  column: ColumnType;
}

const PopupTitle = ({
  taskTitle,
  updateTaskTitle,
  column,
}: IPopupTitle): JSX.Element => {
  return (
    <div className="popup__title">
      <CreditCardOutlined></CreditCardOutlined>
      <Input
        value={taskTitle}
        defaultValue={taskTitle}
        onChange={(e) => updateTaskTitle(e.target.value)}
      />
      <span className="popup__text">
        in list <em>{column.title}</em>
      </span>
    </div>
  );
};

export default PopupTitle;
