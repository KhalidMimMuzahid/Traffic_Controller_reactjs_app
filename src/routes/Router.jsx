import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";
import Analytics from "../pages/analytics/Analytics";
import SignIn from "../pages/signIn/SignIn";
import CPanel from "../pages/cpanel/CPanel";
import Users from "../pages/cpanel/users/Users";
import PrivetRoute from "./privateRoute/PrivateRoute";
import Entity from "../pages/cpanel/entity/Entity";
import Zones from "../pages/cpanel/zones/Zones";
import Intersections from "../pages/cpanel/intersections/Intersections";
import Roads from "../pages/cpanel/roads/Roads";
import Cameras from "../pages/cpanel/cameras/Cameras";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRoute>
        <Main />
      </PrivetRoute>
    ),
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/analytics", element: <Analytics /> },
      {
        path: "/cpanel",
        element: <CPanel />,
        children: [
          { path: "/cpanel/users", element: <Users /> },
          { path: "/cpanel/entity", element: <Entity /> },
          { path: "/cpanel/zones", element: <Zones /> },
          { path: "/cpanel/intersections", element: <Intersections /> },
          { path: "/cpanel/roads", element: <Roads /> },
          { path: "/cpanel/cameras", element: <Cameras /> },
        ],
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
