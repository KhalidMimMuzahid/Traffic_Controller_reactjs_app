import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";
import Analytics from "../pages/analytics/Analytics";
import SignIn from "../pages/signIn/SignIn";
import CPanel from "../pages/cpanel/CPanel";
import Users from "../pages/cpanel/users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/analytics", element: <Analytics /> },
      {
        path: "/cpanel",
        element: <CPanel />,
        children: [{ path: "/cpanel/users", element: <Users /> }],
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
