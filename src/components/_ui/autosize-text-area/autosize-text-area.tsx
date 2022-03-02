import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;
interface IAutosizeTextAreaProps {
  setClass: string;
  outerValue: string;
  setOuterValue: React.Dispatch<React.SetStateAction<string>>;
}

const AutosizeTextArea = ({
  setClass,
  outerValue,
  setOuterValue,
}: IAutosizeTextAreaProps) => {
  return (
    <>
      <TextArea
        value={outerValue}
        defaultValue={outerValue}
        onChange={(e) => setOuterValue(e.target.value)}
        autoSize={{ minRows: 3, maxRows: 8 }}
        className={setClass}
      />
    </>
  );
};

export default AutosizeTextArea;
