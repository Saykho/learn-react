import { ZoomInOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { UserInfo } from "@features/users";
import { UsersInfo } from "@features/users/usersInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSelector } from "@store/reducers/user";
import { getUsersRequestAction } from "@store/actions";
import { LoaderLayout } from "@features/layout/loader";
import { useLoadingSlot } from "@features/loading";
import { LoadingSlot } from "@enums/loadingSlot";
import styles from "./UserLayout.module.scss";

export const UserLayout: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  const isLoading = useLoadingSlot(LoadingSlot.GET_USERS);

  useEffect(() => {
    dispatch(getUsersRequestAction());
  }, []);
  const onButtonClick = () => {
    setIsOpenModal(true);
  };
  const onModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      {isLoading ? (
        <LoaderLayout />
      ) : (
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
      )}
    </div>
  );
};
