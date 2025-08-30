import { FaBuilding } from "react-icons/fa";

interface ItemStageProps {
  stage: number;
  totalStages: number;
  key?: number;
}

const ItemStage = ({ stage, totalStages }: ItemStageProps) => {
  return (
    <>
      <div className="space-y-2 relative">
        <div className="rounded-2xl bg-blue-default w-16 h-16 flex justify-center items-center shadow-md shadow-zinc-200 hover:shadow-zinc-500 hover:border-2 border-black cursor-pointer">
          <FaBuilding color="white" size={30} />
        </div>

        <p className="text-center text-blue-default font-medium absolute -bottom-6 left-2.5">
          Item {stage}
        </p>

        <p className="text-center text-sm text-black font-medium absolute -bottom-10 -left-0">
          Concluído
        </p>
      </div>

      {stage < totalStages && (
        <div className="flex-1 border-t-4 border-blue-default border-dashed " />
      )}
    </>
  );
};

export default ItemStage;
