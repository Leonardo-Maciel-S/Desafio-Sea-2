import EmployeeContainer from "../components/employee/EmployeeContainer";
import Profile from "../components/Profile";
import Stages from "../components/stages/Stages";

const Employee = () => {
  return (
    <>
      <Stages />

      <div className="flex gap-8 w-full flex-wrap xl:flex-nowrap">
        <Profile />

        <EmployeeContainer />
      </div>
    </>
  );
};

export default Employee;
