import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pages } from "@constants/pages";
import { UsersPage } from "@pages/UsersPage";
import { LoginPage } from "@pages/LoginPage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={Pages.login} element={<LoginPage />} />
      <Route path={Pages.mainPage} element={<UsersPage />} />
    </Routes>
  );
};
