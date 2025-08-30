import {
  FaEdit,
  FaRegBuilding,
  FaNetworkWired,
  FaRegBell,
  FaUserAlt,
} from "react-icons/fa";
import MenuSideBar from "./MenuSideBar";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useLocation } from "react-router";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-blue-default w-18 h-screen rounded-r-2xl py-10 flex items-center justify-center relative">
      <div className="w-full h-10 bg-white absolute top-10" />

      <div className="flex flex-col gap-6 items-center justify-center">
        <MenuSideBar
          icon={FaRegBuilding}
          destinationPath={"/home"}
          actualPath={pathname}
        />
        <MenuSideBar
          icon={FaEdit}
          destinationPath={"/employee"}
          actualPath={pathname}
        />
        <MenuSideBar
          icon={FaNetworkWired}
          destinationPath={"/network"}
          actualPath={pathname}
        />
        <MenuSideBar
          icon={FaRegBell}
          destinationPath={"/notification"}
          actualPath={pathname}
        />
        <MenuSideBar
          icon={FaClockRotateLeft}
          destinationPath={"/updates"}
          actualPath={pathname}
        />
        <MenuSideBar
          icon={FaUserAlt}
          destinationPath={"/user"}
          actualPath={pathname}
        />
      </div>
    </div>
  );
};

export default SideBar;
