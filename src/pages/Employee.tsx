import EmployeeContainer from "../components/employee/EmployeeContainer";
import Profile from "../components/Profile";

const Employee = () => {
  return (
    <div className="flex gap-8 w-full flex-wrap xl:flex-nowrap">
      <Profile />

      <EmployeeContainer />
    </div>
  );
};

export default Employee;
