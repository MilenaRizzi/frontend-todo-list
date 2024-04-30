import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TaskData } from "../interface/TaskData";

const API_URL = "http://localhost:8080";

const putData = async ({
  taskId,
  newData,
}: {
  taskId: number;
  newData: TaskData;
}): Promise<void> => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, newData);
  return response.data;
};

export function useTaskDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: putData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks-data"] });
    },
  });

  return mutate;
}
