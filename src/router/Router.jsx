import { createBrowserRouter, Link } from "react-router-dom";
import { LoginPage } from "@pages/LoginPage";
import { UsersPage } from "@pages/UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LoginPage />
        <Link to="users">Users</Link>
      </>
    ),
  },
  {
    path: "users",
    element: <UsersPage />,
  },
]);
