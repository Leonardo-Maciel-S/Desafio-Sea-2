import { createBrowserRouter } from "react-router";

import App from "../App";
import Employee from "../pages/Employee";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "employee",
        Component: Employee,
      },
    ],
  },
]);
