import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import BoardType from '../../common/types/board-type';
import BoardListItem from '../board-list__item';
import BoardCreatePopup from '../board-create__popup';
import './board-list.scss';

interface IBoardListProps {
  boards?: BoardType[];
  getBoards: React.Dispatch<React.SetStateAction<void>>;
  login: any;
}

const BoardList = ({
  boards = [],
  getBoards,
  login,
}: IBoardListProps): JSX.Element => {
  useEffect(() => {
    console.log('useEffect board__lsit');
    login('admin', 'admin');
    getBoards();
  }, [login]);
  const renderBoardItems = boards.map((b) => (
    <BoardListItem key={b.id} id={b.id} title={b.title}></BoardListItem>
  ));

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Layout className="board-list">
      {renderBoardItems}
      <BoardCreatePopup
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <div className="create-board__btn">
          <span>Create new board</span>
        </div>
      </BoardCreatePopup>
    </Layout>
  );
};

export default BoardList;
