import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './task-popup.scss';
import TaskType from '../../common/types/task-type';

interface ITaskPopupProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  // task: TaskType;
}

const TaskPopup = ({
  children,
}: // task
ITaskPopupProps): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {React.cloneElement(children, { onClick: showModal })}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default TaskPopup;
