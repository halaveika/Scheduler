import React, { useState } from 'react';
import { CreditCardOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import TaskType from '../../common/types/task-type';
import './popup-title.scss';

interface IPopupTitle {
  taskTitle: string;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
}

const PopupTitle = ({taskTitle,setTaskTitle}:IPopupTitle): JSX.Element => {
  return (
    <div className="popup__title">
      <CreditCardOutlined></CreditCardOutlined>
      <Input value={taskTitle} defaultValue={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
      <span className="popup__text">in list <em>{task.columnId}</em></span>
    </div>
  );
};

export default PopupTitle;
