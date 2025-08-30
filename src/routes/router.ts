import { createBrowserRouter } from "react-router";

import App from "../App";
import Employee from "../pages/Employee";
import ComingSoon from "../pages/ComingSoon";
import RedirectToEmployee from "../components/redirect/RedirectToEmployee";
import RedirectToHome from "../components/redirect/RedirectToHome";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "",
        Component: RedirectToEmployee,
      },
      {
        path: "employee",
        Component: Employee,
      },
      {
        path: "home",
        Component: ComingSoon,
      },
      {
        path: "network",
        Component: ComingSoon,
      },
      {
        path: "notification",
        Component: ComingSoon,
      },
      {
        path: "updates",
        Component: ComingSoon,
      },
      {
        path: "user",
        Component: ComingSoon,
      },
    ],
  },
  {
    path: "*",
    Component: RedirectToHome,
  },
]);
