import { Outlet } from "react-router";
import "./App.css";
import SideBar from "./components/SideBar";
import Stages from "./components/stages/Stages";

function App() {
  return (
    <div className="flex ">
      <SideBar />
      <div className="flex gap-8 px-8 py-6 w-full">
        <Stages />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
