import { Button } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import React from 'react';
import './task__title-update.scss';
import AutosizeTextArea from '../_ui/autosize-text-area';
import CustomBtn from '../_ui/custom-btn';
import TaskPopup from '../task-popup';

interface ITaskTitleUpdateProps {
  title: string;
  activeTaskTitleUpdate: boolean;
  openTaskTitleUpdate: () => void;
  saveTaskTitleUpdate: (newTitle: string) => void;
  closeTaskTitleUpdate: () => void;
  titleTaskUpdate: string;
  setTitleTaskUpdate: React.Dispatch<React.SetStateAction<string>>;
  deleteTaskFromBoard: () => void;
}

const TaskTitleUpdate = ({
  title,
  activeTaskTitleUpdate,
  openTaskTitleUpdate,
  saveTaskTitleUpdate,
  closeTaskTitleUpdate,
  titleTaskUpdate,
  setTitleTaskUpdate,
  deleteTaskFromBoard,
}: ITaskTitleUpdateProps): JSX.Element => {
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
          <CustomBtn
            innerClass="opencard-btn"
            title="Open Card"
            clickBtn={() => console.log('click open-btn task')}
          >
            <CreditCardOutlined />
          </CustomBtn>
          <CustomBtn
            innerClass="delete-btn"
            title="Delete"
            clickBtn={() => deleteTaskFromBoard()}
          >
            <DeleteOutlined />
          </CustomBtn>
        </>
      ) : (
        <TaskPopup>
          <span className="task-title">{title}</span>
        </TaskPopup>
      )}
    </div>
  );
};

export default TaskTitleUpdate;
