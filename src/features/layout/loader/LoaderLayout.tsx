import React from "react";
import { Spin } from "antd";
import styles from "./LoaderLayout.module.scss";

export const LoaderLayout: React.FC = () => {
  return (
    <div className={styles.spinnerBg}>
      <Spin size="large" />
    </div>
  );
};
