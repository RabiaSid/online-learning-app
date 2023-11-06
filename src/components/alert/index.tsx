import React from 'react';
import { Alert, Space } from 'antd';

type PropsType = {
    message?: any;
    type?:any
}

export default function AlertBox(props: PropsType) {
    const {message, type} = props
 
  return (
    <Space direction="vertical" style={{ width: '100%' }} className='my-1'>
        <Alert message={message} type={type} showIcon  closable/>
    {/* <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" /> */}
  </Space>
  )
}
