import { FaBuilding } from "react-icons/fa";

const ItemStage = ({ stage }: { stage: number }) => {
  return (
    <>
      <div className="space-y-2 relative">
        <div className="rounded-2xl bg-blue-default w-16 h-16 flex justify-center items-center shadow-md shadow-zinc-200 hover:shadow-zinc-500 hover:border-2 border-black cursor-pointer">
          <FaBuilding color="white" size={30} />
        </div>

        <p className="text-center text-d text-blue-default font-medium absolute -bottom-5 left-2.5">
          Item {stage}
        </p>
      </div>

      {stage < 9 && (
        <div className="flex-1 border-t-4 border-blue-default border-dashed " />
      )}
    </>
  );
};

export default ItemStage;
