import React from "react";
import { Button, Form, Input, Space } from "antd";
import { User } from "@models/user";

type EditUserInfoType = {
  user: User;
  onSave: (newUser: User) => void;
};

type UserInfoForm = {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
};

export const EditUserInfo: React.FC<EditUserInfoType> = ({ user, onSave }) => {
  const [form] = Form.useForm<UserInfoForm>();

  const onFinish = (newUser: UserInfoForm) => {
    onSave({
      id: newUser.id,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      address: {
        city: newUser.city,
        suite: newUser.suite,
        street: newUser.street,
      },
    });
  };

  return (
    <Form
      initialValues={{
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
      }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item label="Name" name="name">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Nickname" name="username">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Street" name="street">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Suite" name="suite">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Id" name="id" hidden>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space align="center">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
