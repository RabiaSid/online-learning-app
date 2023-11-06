import React from "react";
import { Progress } from "antd";

type PropsType = {
  percent?: any;
  status?: any;
};

export default function ProgressBar(props: PropsType) {
  const { percent , status} = props;
  return (
    <>
      <Progress percent={percent} showInfo={false} status={status} size="small" />
      {/* <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} /> */}
    </>
  );
}
