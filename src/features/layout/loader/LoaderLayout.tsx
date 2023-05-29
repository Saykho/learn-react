import React from "react";
import { Spin } from "antd";
import "./LoaderLayout.module.scss";

export const LoaderLayout: React.FC = () => {
  return (
    <div className="spinner-bg">
      <Spin size="large" />
    </div>
  );
};
