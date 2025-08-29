import { createBrowserRouter } from "react-router";
import App from "../App";
import SideBar from "../components/SideBar";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "employee",
        Component: SideBar,
      },
    ],
  },
]);
