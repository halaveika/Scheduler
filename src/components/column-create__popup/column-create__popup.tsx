import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useActions } from '../../modules/redux/hooks/use-actions';
import AutosizeTextArea from '../_ui/autosize-text-area';
import './column-create__popup.scss';
import BoardType from '../../common/types/board-type';

interface IColumnCreatePopup {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  board: BoardType;
}

const ColumnCreatePopup = ({
  children,
  isModalVisible,
  setIsModalVisible,
  board,
}: IColumnCreatePopup): JSX.Element => {
  const [columnTitle, setColumnTitle] = useState('');

  const { createColumn } = useActions();

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
    createColumn({
      title: columnTitle,
      order: board.columns.length,
      boardId: board.id,
    });
    setColumnTitle('');
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
        <span className="board-create__text">Column title</span>
        <AutosizeTextArea
          setClass="board-create__textarea"
          outerValue={columnTitle}
          setOuterValue={setColumnTitle}
        ></AutosizeTextArea>
        <Button className="create__btn" block onClick={() => createNewBoard()}>
          Create
        </Button>
      </Modal>
    </>
  );
};

export default ColumnCreatePopup;
