import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";
import Analytics from "../pages/analytics/Analytics";
import SignIn from "../pages/signIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/analytics", element: <Analytics /> },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
