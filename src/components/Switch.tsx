import { useState } from "react";

const Switch = ({ textOn, textOff }: { textOn: string; textOff: string }) => {
  const [on, setOn] = useState(true);

  const handleClick = () => {
    setOn(!on);
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full bg-[#DBDBDB] text-[#3A3A3A] font-light flex items-center justify-center ${
        on ? "pr-1 pl-2" : "pr-2 pl-1"
      }`}
    >
      <div
        className={`flex justify-center gap-2 items-center transition-all duration-300 ease-linear ${
          on ? "flex" : "hidden"
        }`}
      >
        <p>{textOn}</p>
        <span className="size-5 rounded-full bg-blue-default" />
      </div>

      <div
        className={`justify-center gap-2 items-center transition-all duration-300 ease-linear ${
          on ? "hidden" : "flex"
        }`}
      >
        <span className="size-5 rounded-full bg-blue-default" />

        <p className="">{textOff}</p>
      </div>
    </button>
  );
};

export default Switch;
