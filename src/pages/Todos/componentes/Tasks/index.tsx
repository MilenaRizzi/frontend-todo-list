import { Circle, CheckCircle, Trash } from "phosphor-react";
import { useState } from "react";
import {
  CompletedTasks,
  CreatedTasks,
  Task,
  TaskContent,
  TasksContainer,
  TasksInfo,
} from "./styles";
import { useTaskData } from "../../../../components/hooks/useTaskData";
import { useTaskDataDelete } from "../../../../components/hooks/useTaskDataDelete";

interface TaskStatus {
  [taskId: number]: boolean;
}

export function Tasks() {
  const [taskStatus, setTaskStatus] = useState<TaskStatus>({});

  const { data } = useTaskData();
  const deleteTaskMutation = useTaskDataDelete();

  const toggleTaskStatus = (taskId: number) => {
    setTaskStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: !prevStatus[taskId],
    }));
  };

  const calculateCompletedTasksCount = () => {
    return Object.values(taskStatus).filter((status) => status).length;
  };

  const totalTasksCount = data ? data.length : 0;
  const completedTasksCount = calculateCompletedTasksCount();
  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTaskMutation.mutateAsync(taskId);
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };
  
  return (
    <TasksContainer>
      <TasksInfo>
        <CreatedTasks>
          <p>Tarefas criadas </p>
          <span>{totalTasksCount}</span>
        </CreatedTasks>
        <CompletedTasks>
          <p>Concluídas</p>
          <span>
            {completedTasksCount} de {totalTasksCount}
          </span>
        </CompletedTasks>
      </TasksInfo>
      <div>
        {
          data?.map((taskData) => (
            <TaskContent key={taskData.id}>
              <Task
                key={taskData.id}
                completed={taskStatus[taskData.id ?? -1]}
                onClick={() => toggleTaskStatus(taskData.id ?? -1)}
              >
                {taskStatus[taskData.id ?? -1] ? (
                  <CheckCircle size={24} color="#5e60ce" weight="fill" />
                ) : (
                  <Circle size={24} color="#4ea8de" />
                )}
                <p className={taskStatus[taskData.id ?? -1] ? "completed" : ""}>
                  {taskData.description}
                </p>
              </Task>
              <button onClick={() => handleDeleteTask(taskData.id ?? -1)}>
                <Trash size={20} color="#808080" />
              </button>
            </TaskContent>
          ))}
      </div>
    </TasksContainer>
  );
}
