import { Button, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React from 'react';
import './task__title-update.scss';
import AutosizeTextArea from '../ui/autosize-text-area';

const { TextArea } = Input;

interface ITaskTitleUpdateProps {
  title: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskTitleUpdate = ({
  title,
  active,
  setActive,
}: ITaskTitleUpdateProps): JSX.Element => {
  return (
    <div className="title-update__container">
      <Button
        size={'small'}
        className={active ? 'update-btn active' : 'update-btn'}
        onClick={() => setActive(true)}
      >
        <EditOutlined />
      </Button>
      <div
        className={active ? 'overlay active' : 'overlay'}
        onClick={() => setActive(false)}
      ></div>
      {active ? (
        <>
          <AutosizeTextArea
            setClass="title-update__area"
            outerValue={title}
          ></AutosizeTextArea>
          <Button type="primary" className="save-btn">
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
