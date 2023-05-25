import { ZoomInOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { UserInfo } from "@features/users";
import { UsersInfo } from "@features/users/usersInfo";
import { useSelector } from "react-redux";
import { getUsersSelector } from "@store/reducers/user";
import { getUsers } from "@store/actions";
import styles from "./UserLayout.module.scss";
import { useAppDispatch } from "../../../hooks/hooks";

export const UserLayout: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const users = useSelector(getUsersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
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
      <Row gutter={[48, 16]} justify="center">
        {users.map((user) => (
          <Col key={user.id}>
            <UsersInfo user={user} />
          </Col>
        ))}
      </Row>
    </>
  );
};
