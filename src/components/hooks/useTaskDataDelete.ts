import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const deleteData = async (taskId: number): AxiosPromise<void> => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
  return response;
};

export function useTaskDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks-data"] });
    },
  });

  return mutate;
}
