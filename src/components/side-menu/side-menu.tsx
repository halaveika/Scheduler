import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  WindowsOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import './side-menu.scss';
import { Link } from 'react-router-dom';
import { useActions } from '../../modules/redux/hooks/use-actions';
import { useTypedSelector } from '../../modules/redux/hooks/use-typed-selector';
import BoardType from '../../common/types/board-type';

const { SubMenu } = Menu;

const SideMenu = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  const { boards } = useTypedSelector((state) => state.content);

  useEffect(() => {
    console.log(collapsed);
  }, [collapsed, boards]);

  const toggleCollapsed = () => {
    setCollapsed((current) => !current);
  };

  const renderBoards = (boardsArr: BoardType[]) =>
    boardsArr.map((board, index) => (
      <Menu.Item key={index + 1}>
        <Link to={`board/${board.id}/${board.title}`}>{board.title}</Link>
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
