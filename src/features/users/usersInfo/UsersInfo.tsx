import React, { useState } from "react";
import { Button, Card, Form, Space, Typography } from "antd";
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
  const [form] = Form.useForm();
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
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="edit"
          form={form}
        >
          <EditUserInfo user={user} />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space align="center">
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button htmlType="button" onClick={() => setIsEdit(false)}>
                Close
              </Button>
            </Space>
          </Form.Item>
        </Form>
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
