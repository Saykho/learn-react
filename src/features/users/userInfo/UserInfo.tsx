import React from "react";
import { Statistic } from "antd";

type PropsType = {
  userName: string;
};

export const UserInfo: React.FC<PropsType> = ({ userName }) => {
  return <Statistic title="Самый лучший человек" value={userName} />;
};
