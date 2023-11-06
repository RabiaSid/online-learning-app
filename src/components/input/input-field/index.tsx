import React from "react";
import { Input } from "antd";

type propsType = {
  label?: string;
  onChange?: (...args: any[]) => any;
  type?: string;
  value?: any;
  disabled?: any;
};

export default function Inputfield(props: propsType) {
  const { label, onChange, type, value, disabled } = props;
  return (
    <>
      <Input
        className="IconInputfield round-1 my-2"
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
        disabled={disabled}
      />
    </>
  );
}


