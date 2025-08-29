import AddAndFiltersButtons from "./components/AddAndFiltersButtons";
import EmployeeCard from "./components/EmployeeCard";

const EmployeeContainer = () => {
  return (
    <div className="w-full space-y-6">
      <div className="rounded-2xl overflow-hidden w-full bg-white space-y-4 xl:min-w-[740px]">
        <header className="bg-blue-default px-6 py-2 ">
          <h2 className="text-white text-2xl">Funcionário(s)</h2>
        </header>

        <AddAndFiltersButtons />

        <div className="px-6 py-4 space-y-4">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>

        <div className="px-6 py-4 flex justify-end">teste</div>
      </div>
      <div className="flex justify-end">
        <button
          disabled
          className="px-10 py-1 text-white bg-blue-default disabled:bg-medium-gray rounded-lg cursor-pointer "
        >
          Proximo Passo
        </button>
      </div>
    </div>
  );
};

export default EmployeeContainer;
