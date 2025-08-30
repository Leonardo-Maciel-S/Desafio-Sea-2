import type { IconType } from "react-icons";
import { Link } from "react-router";

interface MenuSideBarProps {
  icon?: IconType;
  destinationPath: string;
  actualPath: string;
}

const MenuSideBar = ({
  icon: Icon,
  destinationPath,
  actualPath,
}: MenuSideBarProps) => {
  const isSelected = destinationPath === actualPath;

  return (
    <Link to={destinationPath}>
      <button
        className={`flex items-center justify-center p-2 rounded-xl relative group  ${
          isSelected
            ? "bg-white"
            : "bg-gray-default hover:bg-white cursor-pointer"
        }`}
        disabled={isSelected}
      >
        <span
          className={`w-1 h-full bg-white absolute -left-3 group-hover:block ${
            isSelected ? "block" : "hidden"
          }`}
        />
        {Icon && <Icon color="#649fbf" size={25} />}
      </button>
    </Link>
  );
};

export default MenuSideBar;
