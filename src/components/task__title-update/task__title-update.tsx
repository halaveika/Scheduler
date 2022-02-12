import { Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './task__title-update.scss';
import AutosizeTextArea from '../_ui/autosize-text-area';

const { TextArea } = Input;

interface ITaskTitleUpdateProps {
  title: string;
  setBoardIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TaskTitleUpdate = ({
  title,
  setBoardIsActive,
  setTaskTitle,
}: ITaskTitleUpdateProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const openTaskTitleUpdate = () => {
    setActive(true);
    setBoardIsActive(true);
  };

  const saveTaskTitleUpdate = () => {
    console.log('task__title-update saveTaskTitleUpdate');
    console.log(title);
    setActive(false);
    setBoardIsActive(false);
  };

  const closeTaskTitleUpdate = () => {
    setActive(false);
    setBoardIsActive(false);
  };

  return (
    <div className="title-update__container">
      <Button
        size={'small'}
        className={active ? 'update-btn active' : 'update-btn'}
        onClick={() => openTaskTitleUpdate()}
      >
        <EditOutlined />
      </Button>
      <div
        className={
          active ? 'title-update__overlay active' : 'title-update__overlay'
        }
        onClick={() => closeTaskTitleUpdate()}
      ></div>
      {active ? (
        <>
          <AutosizeTextArea
            setClass="title-update__area"
            outerValue={title}
            setOuterValue={setTaskTitle}
          ></AutosizeTextArea>
          <Button
            type="primary"
            className="save-btn"
            onClick={() => saveTaskTitleUpdate()}
          >
            Save
          </Button>
        </>
      ) : (
        <span className="task-title">{title}</span>
      )}
    </div>
  );
};

export default TaskTitleUpdate;
