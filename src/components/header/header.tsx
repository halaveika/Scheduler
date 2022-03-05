import { Layout, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <Layout.Header className="header">
      <Layout className="header-container">
        <Link to="/">
          <h1 className="title">Sheduler</h1>
        </Link>
        <Input.Search className="search" />
      </Layout>
    </Layout.Header>
  );
};

export default Header;
