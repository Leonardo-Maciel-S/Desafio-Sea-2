import ItemStage from "./components/Item";

const Stages = () => {
  const stagesList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-full flex items-center bg-white max-h-36 rounded-xl p-6">
      {stagesList.map((stage) => (
        <ItemStage stage={stage} />
      ))}
    </div>
  );
};

export default Stages;
