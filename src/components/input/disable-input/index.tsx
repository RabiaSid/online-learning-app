import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

type propsType = {
    label?: any;
    onChange?: (...args: any[]) => any;
    type?: string;
    value?: any;
  };
  
  export default function DisableInput(props: propsType) {
    const { label, onChange, type, value } = props;
    return (
      <Input
      prefix={<UserOutlined />}
      placeholder={label}
      value={value}
      onChange={onChange}
      type={type ?? "text"}
      disabled={true}
      />
    );
  }