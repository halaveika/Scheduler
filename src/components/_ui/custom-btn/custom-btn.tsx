import { Button } from 'antd';
import React from 'react';
import './custom-btn.scss';

interface ICustomBtnProps {
  title: string;
  children: React.ReactNode;
  clickBtn: () => void;
  innerClass: string;
}

const CustomBtn = ({
  title,
  children,
  clickBtn,
  innerClass,
}: ICustomBtnProps): JSX.Element => {
  return (
    <Button className={innerClass} onClick={() => clickBtn()}>
      {children}
      {title}
    </Button>
  );
};

export default CustomBtn;
