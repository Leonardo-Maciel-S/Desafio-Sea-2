import { createBrowserRouter } from "react-router";

import App from "../App";
import Employee from "../pages/Employee";
import RedirectToEmployee from "../components/RedirectToHome";

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
    ],
  },
]);
