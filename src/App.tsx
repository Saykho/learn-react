import React from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import { colors } from "@theme/colors";
import { RouterProvider } from "react-router-dom";
import { router } from "@router/Router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
        components: {
          Layout: {
            colorBgHeader: "red",
          },
          Menu: {
            colorItemBg: "red",
          },
        },
      }}
    >
      {/* <Suspense fallback={<LoadingPage />}> */}
      {/* <RouterProvider router={router} /> */}
      {/* </Suspense> */}
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
