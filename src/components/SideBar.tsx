import {
  FaEdit,
  FaRegBuilding,
  FaNetworkWired,
  FaRegBell,
  FaUserAlt,
} from "react-icons/fa";
import MenuSideBar from "./MenuSideBar";
import { FaClockRotateLeft } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="bg-blue-default w-18 h-screen rounded-r-2xl py-10 flex items-center justify-center relative">
      <div className="w-full h-10 bg-white absolute top-10" />

      <div className="flex flex-col gap-6 items-center justify-center">
        <MenuSideBar icon={FaRegBuilding} />
        <MenuSideBar icon={FaEdit} />
        <MenuSideBar icon={FaNetworkWired} />
        <MenuSideBar icon={FaRegBell} />
        <MenuSideBar icon={FaClockRotateLeft} />
        <MenuSideBar icon={FaUserAlt} />
      </div>
    </div>
  );
};

export default SideBar;
