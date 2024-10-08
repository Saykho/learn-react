import React, { useState } from "react";
import { Card, Space, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { User } from "@models/user.model";
import { EditUserInfo } from "@features/users/editUserInfo";

type UsersInfoType = {
  user: User;
};

export const UsersInfo: React.FC<UsersInfoType> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" onClick={() => setIsEdit(!isEdit)} />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      {isEdit ? (
        <EditUserInfo user={user} />
      ) : (
        <Space direction="vertical">
          <Typography.Text>Name: {user.name}</Typography.Text>
          <Typography.Text>Nickname: {user.username}</Typography.Text>
          <Typography.Text>Email: {user.email}</Typography.Text>
          <Typography.Text>City: {user.address.city}</Typography.Text>
          <Typography.Text>Street: {user.address.street}</Typography.Text>
          <Typography.Text>Suite: {user.address.suite}</Typography.Text>
        </Space>
      )}
    </Card>
  );
};
