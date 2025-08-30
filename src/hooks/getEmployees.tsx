import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import type { Employee } from "../@types/employee";

const useGetEmployees = () => {
  const getEmployees = async () => {
    const { data } = await api.get<Employee[]>("/employee");

    return data;
  };

  const { data: employees } = useQuery({
    queryKey: ["getEmployees"],
    queryFn: getEmployees,
  });

  return { employees };
};

export default useGetEmployees;
