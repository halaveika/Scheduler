import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './popup-description.scss';
import AutosizeTextArea from '../_ui/autosize-text-area';

interface IPopupDescription {
  taskDescription: string;
  updateTaskDescription: (title: string) => void;
}

const PopupDescription = ({
  taskDescription,
  updateTaskDescription,
}: IPopupDescription): JSX.Element => {
  return (
    <div className="popup__description">
      <UnorderedListOutlined />
      <span className="description-text">Description</span>
      <AutosizeTextArea
        setClass="description-textarea"
        outerValue={taskDescription}
        setOuterValue={updateTaskDescription}
      ></AutosizeTextArea>
    </div>
  );
};

export default PopupDescription;
