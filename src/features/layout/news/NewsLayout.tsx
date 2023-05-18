import React from "react";
import { Button, Col, Row, Space } from "antd";

export const NewsLayout = () => {
  return (
    <div>
      <Space direction="horizontal">
        <Button>Click me</Button>
        <Row gutter={[16, 16]}>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Space>
    </div>
  );
};
