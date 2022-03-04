import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useActions } from '../../modules/redux/hooks/use-actions';
import AutosizeTextArea from '../_ui/autosize-text-area';
import './board-create__popup.scss';

interface IBoardCreatePopup {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BoardCreatePopup = ({
  children,
  isModalVisible,
  setIsModalVisible,
}: IBoardCreatePopup): JSX.Element => {
  const [boardTitle, setBoardTitle] = useState('');

  const { createBoard } = useActions();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const createNewBoard = () => {
    createBoard({ title: boardTitle, columns: [] });
    setBoardTitle('');
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
        footer={null}
      >
        <span className="board-create__text">Description</span>
        <AutosizeTextArea
          setClass="board-create__textarea"
          outerValue={boardTitle}
          setOuterValue={setBoardTitle}
        ></AutosizeTextArea>
        <Button className="create__btn" block onClick={() => createNewBoard()}>
          Create
        </Button>
      </Modal>
    </>
  );
};

export default BoardCreatePopup;
