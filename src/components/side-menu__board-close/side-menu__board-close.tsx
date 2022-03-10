import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useActions } from '../../modules/redux/hooks/use-actions';
import BoardType from '../../common/types/board-type';
import AutosizeTextArea from '../_ui/autosize-text-area';
import './side-menu__board-close.scss';

interface ISideMenuBoardClose {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  board: BoardType;
}

const SideMenuBoardClose = ({
  children,
  isModalVisible,
  setIsModalVisible,
  board,
}: ISideMenuBoardClose): JSX.Element => {
  const [boardTitle, setBoardTitle] = useState(board.title);

  const { deleteBoard, updateBoard } = useActions();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const closeBoard = (boardId: string) => {
    deleteBoard(boardId);
    setIsModalVisible(false);
  };

  const updateBoardTitle = () => {
    updateBoard({ ...board, title: boardTitle });
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
        <span className="board-create__text">Board title</span>
        <AutosizeTextArea
          setClass="board-create__textarea"
          outerValue={boardTitle}
          setOuterValue={setBoardTitle}
        ></AutosizeTextArea>
        <Button
          className="create__btn"
          block
          onClick={() => updateBoardTitle()}
        >
          Update
        </Button>
        <span className="board-create__text">Close board: {board.title}</span>
        <Button
          danger
          className="close__btn"
          block
          onClick={() => closeBoard(board.id)}
        >
          Close
        </Button>
      </Modal>
    </>
  );
};

export default SideMenuBoardClose;
