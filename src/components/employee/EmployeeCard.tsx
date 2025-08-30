import { useState } from "react";
import Info from "./Info";

interface EmployeeCard {
  active: boolean;
  name: string;
  cpf: string;
  job: string;
}

const EmployeeCard = ({ active, name, cpf, job }: EmployeeCard) => {
  const bgColor = active ? "bg-blue-default-opacity-20" : "bg-light-gray";
  const [showOptions, setShowOptions] = useState(false);

  const handleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={`${bgColor} p-4 rounded-xl relative overflow-hidden`}>
      <div className="space-y-2">
        <h3 className="text-dark-gray text-2xl">{name}</h3>

        <div className="flex items-center gap-4">
          <Info>{cpf}</Info>
          <Info>{active ? "Ativo" : "Inativo"}</Info>
          <Info>{job} 1</Info>
        </div>
      </div>

      <button
        onFocus={handleOptions}
        onBlur={handleOptions}
        className="text-3xl text-white bg-blue-default absolute right-0 top-0 h-full px-4 cursor-pointer"
      >
        <p className="relative bottom-1.5">...</p>

        {showOptions && (
          <div className="absolute right-1 overflow-hidden top-0.5 h-[95%] w-32 rounded-lg bg-gray-400 flex flex-col shadow-lg shadow-dark-gray ">
            <button className="text-lg flex-1 border-b bg-white text-medium-gray hover:text-blue-default cursor-pointer">
              Alterar
            </button>
            <button className="text-lg flex-1  bg-white text-medium-gray hover:text-blue-default cursor-pointer">
              Excluir
            </button>
          </div>
        )}
      </button>
    </div>
  );
};

export default EmployeeCard;
