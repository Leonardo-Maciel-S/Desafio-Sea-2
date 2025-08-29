import type { IconType } from "react-icons";

interface MenuSideBarProps {
  icon?: IconType;
}

const MenuSideBar = ({ icon: Icon }: MenuSideBarProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-default hover:bg-white p-2 rounded-xl relative group cursor-pointer">
      <span className="hidden w-1 h-full bg-white absolute -left-2.5 group-hover:block" />
      {Icon && <Icon color="#649fbf" size={25} />}
    </div>
  );
};

export default MenuSideBar;
