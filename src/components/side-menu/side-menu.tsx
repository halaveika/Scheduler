import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  WindowsOutlined,
  UnorderedListOutlined,
  EditOutlined,
} from '@ant-design/icons';
import './side-menu.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../modules/redux/hooks/use-typed-selector';
import BoardType from '../../common/types/board-type';
import SideMenuBoardClose from '../side-menu__board-close';
import OverflowedHiddenText from '../_ui/overflowed-hidden__text';

const { SubMenu } = Menu;

const SideMenu = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const [closeBoardModalIsVisible, setCloseBoardModalIsVisible] =
    useState(false);

  const { boards } = useTypedSelector((state) => state.content);

  useEffect(() => {
    console.log(collapsed);
  }, [collapsed, boards]);

  const toggleCollapsed = () => {
    setCollapsed((current) => !current);
  };

  const navigate = useNavigate();
  async function handleSubmit(id: string, title: string) {
    // event.preventDefault();
    navigate(`../board/${id}/${title}`, { replace: true });
  }

  const renderBoards = (boardsArr: BoardType[]) =>
    boardsArr.map((board, index) => (
      <Menu.Item className="side-menu__board-item" key={index + 2}>
        <div onClick={() => handleSubmit(board.id, board.title)}>
          <OverflowedHiddenText
            text={board.title}
            innerClass="side-menu__item-text"
          />
        </div>
        <SideMenuBoardClose
          isModalVisible={closeBoardModalIsVisible}
          setIsModalVisible={setCloseBoardModalIsVisible}
          board={board}
        >
          <EditOutlined />
        </SideMenuBoardClose>
      </Menu.Item>
    ));

  return (
    <div className="side-menu">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<WindowsOutlined />}>
          <Link to="boards">Boards</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<UnorderedListOutlined />}
          title="Your boards"
        >
          {renderBoards(boards)}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SideMenu;
