import axios, { AxiosPromise } from "axios";
import { TaskData } from "../interface/TaskData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<TaskData[]> => {
  const response = await axios.get(API_URL + "/tasks");
  return response;
};

export function useTaskData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["tasks-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
