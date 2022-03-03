import React, { useState } from 'react';
import { Modal } from 'antd';
import TaskType from '../../common/types/task-type';
import PopupTitle from '../popup__title';
import { useTypedSelector } from '../../modules/redux/hooks/use-typed-selector';
import { useActions } from '../../modules/redux/hooks/use-actions';
import './task-popup.scss';
import { IContentState } from '../../modules/redux/content/content-reducer';
import PopupDescription from '../popup__description';

interface ITaskPopupProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  task: TaskType;
}

const TaskPopup = ({ children, task }: ITaskPopupProps): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const { updateTask } = useActions();

  const { boards } = useTypedSelector((state) => state.content);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateTaskTitle = (title: string) => {
    setTaskTitle(title);
    updateTask(task.boardId!, { ...task, title });
  };

  const updateTaskDescription = (description: string) => {
    setTaskDescription(description);
    updateTask(task.boardId!, { ...task, description });
  };

  return (
    <>
      {React.cloneElement(children, { onClick: showModal })}
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title=""
        footer={null}
      >
        <PopupTitle
          taskTitle={taskTitle}
          updateTaskTitle={updateTaskTitle}
          column={
            boards
              .find((b) => b.id === task.boardId)!
              .columns.find((c) => c.id === task.columnId)!
          }
        ></PopupTitle>
        <PopupDescription
          taskDescription={taskDescription!}
          updateTaskDescription={updateTaskDescription}
        ></PopupDescription>
      </Modal>
    </>
  );
};

export default TaskPopup;
