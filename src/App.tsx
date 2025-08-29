import { Outlet } from "react-router";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default App;
