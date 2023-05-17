import { ZoomInOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Space, Typography } from "antd";
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

  return (
    <>
      <Row gutter={[12, 30]} justify="space-between">
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
      <Modal open={isOpenModal}>
        <UserInfo userName="Alex Smoth" />
      </Modal>
      {users.map((user) => (
        <Row key={user.id} gutter={[16, 48]}>
          <Col span={6}>{user.name}</Col>
          <Col span={6}>{user.username}</Col>
          <Col span={6}>{user.email}</Col>
          <Col span={6}>{user.address.city}</Col>
        </Row>
      ))}
    </>
  );
};
