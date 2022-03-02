import React, { useState } from 'react';
import { Modal } from 'antd';
import TaskType from '../../common/types/task-type';
import PopupTitle from '../popup__title';
import { useTypedSelector } from '../../modules/redux/hooks/use-typed-selector';
import { useActions } from '../../modules/redux/hooks/use-actions';
import './task-popup.scss';
import { ColumnsType } from 'antd/lib/table';
import { IContentState } from '../../modules/redux/content/content-reducer';


interface ITaskPopupProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  task: TaskType;
}

const TaskPopup = ({
  children,
  task
}:ITaskPopupProps): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  const { updateTask } = useActions();

  const {columns} = useTypedSelector((state) => state.content);

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
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title=""
      >
        <PopupTitle taskTitle={taskTitle} setTaskTitle={setTaskTitle} columnTitle={columns.find(c => c.)}></PopupTitle>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default TaskPopup;
