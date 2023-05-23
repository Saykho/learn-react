import { createBrowserRouter, Link } from "react-router-dom";
import { LoginPage } from "@pages/LoginPage";
import { UsersPage } from "@pages/UsersPage";
import { Button } from "antd";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LoginPage />
        <Link to="users">
          <Button>Users</Button>
        </Link>
      </>
    ),
  },
  {
    path: "users",
    element: <UsersPage />,
  },
]);
