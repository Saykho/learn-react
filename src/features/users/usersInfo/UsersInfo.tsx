import React, { useState } from "react";
import { Card, Space, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { User } from "@models/user.model";
import { EditUserInfo } from "@features/users/editUserInfo";
import { editUserInfoTest } from "@store/reducers/user";
import { useAppDispatch } from "../../../hooks";

type UsersInfoType = {
  user: User;
};

export const UsersInfo: React.FC<UsersInfoType> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" onClick={() => setIsEdit(true)} />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      {isEdit ? (
        <EditUserInfo
          onSave={(newUser) => {
            setIsEdit(false);
            dispatch(editUserInfoTest(newUser));
          }}
          user={user}
        />
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
