import React from 'react';
import './overflowed-hidden__text.scss';

interface IOverflowedHiddenText {
  text: string;
  innerClass: string;
}

const OverflowedHiddenText = ({
  text,
  innerClass,
}: IOverflowedHiddenText): JSX.Element => {
  const overflowText = (str: string) => {
    let result = str;
    if (str.length > 25) {
      result = str.slice(0, 23) + '...';
    }
    return result;
  };
  return <div className={innerClass}>{overflowText(text)}</div>;
};

export default OverflowedHiddenText;
