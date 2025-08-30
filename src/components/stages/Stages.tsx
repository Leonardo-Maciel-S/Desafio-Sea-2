import ItemStage from "./Item";

const Stages = () => {
  const stagesList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-full flex items-center bg-white rounded-xl p-6 pb-16 shadow-lg">
      {stagesList.map((stage) => (
        <ItemStage key={stage} stage={stage} totalStages={stagesList.length} />
      ))}
    </div>
  );
};

export default Stages;
