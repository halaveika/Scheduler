import React from 'react';
import { Layout } from 'antd';
import AppRouter from './components/appRouter';
import HeaderContainer from './components/header__container';
import Footer from './components/Footer';
import SideMenu from './components/side-menu';

export default function App(): JSX.Element {
  return (
    <Layout className="container">
      <HeaderContainer />
      <Layout className="main-container">
        <SideMenu></SideMenu>
        <AppRouter />
      </Layout>
      <Footer></Footer>
    </Layout>
  );
}
