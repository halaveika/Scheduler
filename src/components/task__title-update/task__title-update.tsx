import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './task__title-update.scss';
import AutosizeTextArea from '../_ui/autosize-text-area';

interface ITaskTitleUpdateProps {
  title: string;
  activeTaskTitleUpdate: boolean;
  openTaskTitleUpdate: () => void;
  saveTaskTitleUpdate: (newTitle: string) => void;
  closeTaskTitleUpdate: () => void;
}

const TaskTitleUpdate = ({
  title,
  activeTaskTitleUpdate,
  openTaskTitleUpdate,
  saveTaskTitleUpdate,
  closeTaskTitleUpdate,
}: ITaskTitleUpdateProps): JSX.Element => {
  const [titleTaskUpdate, setTitleTaskUpdate] = useState(title);
  return (
    <div className="title-update__container">
      <Button
        size={'small'}
        className={activeTaskTitleUpdate ? 'update-btn active' : 'update-btn'}
        onClick={() => openTaskTitleUpdate()}
      >
        <EditOutlined />
      </Button>
      <div
        className={
          activeTaskTitleUpdate
            ? 'title-update__overlay active'
            : 'title-update__overlay'
        }
        onClick={() => closeTaskTitleUpdate()}
      ></div>
      {activeTaskTitleUpdate ? (
        <>
          <AutosizeTextArea
            setClass="title-update__area"
            outerValue={titleTaskUpdate}
            setOuterValue={setTitleTaskUpdate}
          ></AutosizeTextArea>
          <Button
            type="primary"
            className="save-btn"
            onClick={() => saveTaskTitleUpdate(titleTaskUpdate)}
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
