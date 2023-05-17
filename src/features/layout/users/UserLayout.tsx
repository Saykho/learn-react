import { ZoomInOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { getNextDayRange } from "@utils/getNextDayRange";
import { UserInfo } from "@features/users";
import styles from "./UserLayout.module.scss";

export const UserLayout: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const a = getNextDayRange(5);

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
    </>
  );
};
