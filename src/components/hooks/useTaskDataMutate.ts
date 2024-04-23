import axios, { AxiosPromise } from "axios"
import { TaskData } from "../interface/TaskData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: TaskData): AxiosPromise<TaskData> => {
  const response = axios.post(API_URL + '/tasks', data);
  return response;
}

export function useTaskDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks-data'] });
    }
  })

  return mutate;
}