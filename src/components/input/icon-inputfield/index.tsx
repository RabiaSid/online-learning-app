import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

type propsType = {
  label?: string;
  onChange?: (...args: any[]) => any;
  type?: string;
  value?: any;
  disabled?: any;
};

export default function IconInputfield(props: propsType) {
  const { label, onChange, type, value, disabled } = props;
  return (
    <>
      <Input
        className="IconInputfield round-1"
        prefix={<UserOutlined />}
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
        disabled={disabled}
      />
    </>
  );
}


