import React from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import { UsersPage } from "@pages/UsersPage";
import { colors } from "@theme/colors";

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
      <UsersPage />
    </ConfigProvider>
  );
}

export default App;
