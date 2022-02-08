import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;
interface IAutosizeTextAreaProps {
  setClass: string;
  outerValue: string;
}

const AutosizeTextArea = ({ setClass, outerValue }: IAutosizeTextAreaProps) => {
  const [value, setValue] = useState(outerValue);
  return (
    <>
      <TextArea
        value={value}
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        autoSize={{ minRows: 3, maxRows: 8 }}
        className={setClass}
      />
    </>
  );
};

export default AutosizeTextArea;
