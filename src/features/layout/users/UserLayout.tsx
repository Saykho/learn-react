import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Modal, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { UserInfo } from "@features/users";
import { getUsers } from "@store/actions/get-users";
import styles from "./UserLayout.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks";

export const UserLayout: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  });
  const onButtonClick = () => {
    setIsOpenModal(true);
  };
  const onModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Row gutter={[12, 30]}>
        <Col>
          <Space direction="horizontal" size={32}>
            <Button onClick={onButtonClick} icon={<ZoomInOutlined />}>
              <Typography.Text type="danger">Open modal</Typography.Text>
            </Button>
            <Button type="dashed" className={styles.openButton}>
              OK
            </Button>
          </Space>
        </Col>
        <Col>
          <Typography.Text>Some Text</Typography.Text>
        </Col>
      </Row>
      <Modal open={isOpenModal} onOk={onModalClose} onCancel={onModalClose}>
        <UserInfo userName="Alex Smoth" />
      </Modal>
      <Row gutter={[48, 16]} wrap>
        {users.map((user) => (
          <Card
            key={user.id}
            style={{ width: 300 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" onClick={onButtonClick} />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Space direction="vertical">
              <Col>Name: {user.name}</Col>
              <Col>Nickname: {user.username}</Col>
              <Col>Email: {user.email}</Col>
              <Col>City: {user.address.city}</Col>
              <Col>Street: {user.address.street}</Col>
              <Col>Suite: {user.address.suite}</Col>
            </Space>
          </Card>
        ))}
      </Row>
    </>
  );
};
