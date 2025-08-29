import { Outlet } from "react-router";
import "./App.css";
import SideBar from "./components/SideBar";
import Stages from "./components/stages/Stages";

import background from "./assets/background.svg";

function App() {
  return (
    <div className="flex relative">
      <SideBar />
      <div className="flex flex-col gap-8 px-8 py-6 w-full">
        <Stages />
        <Outlet />
      </div>

      <img
        src={background}
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
    </div>
  );
}

export default App;
