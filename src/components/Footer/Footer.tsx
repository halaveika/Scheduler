import React from 'react';
import { Layout } from 'antd';
import './Footer.scss';

export default function Footer() {
  return (
    <Layout.Footer className="footer">
      <span className="title" onClick={() => window.scrollTo(0, 0)}>
        Sheduler
      </span>
      <span className="copyright">COPYRIGHT © 2022 Sheduler</span>
      <span>
        <a href="https://github.com/halaveika" target="_blank" rel="noreferrer">
          HALAVEIKA ALIAKSANDR
        </a>
      </span>
    </Layout.Footer>
  );
}
