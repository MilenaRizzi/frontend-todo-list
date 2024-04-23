import { CheckCircle, Circle } from "phosphor-react";
import {
  CompletedTasks,
  CreatedTasks,
  Task,
  TaskContent,
  TasksContainer,
  TasksInfo,
  TrashIcon,
} from "./styles";
import { useTaskData } from "../../../../components/hooks/useTaskData";
import { useTaskDataDelete } from "../../../../components/hooks/useTaskDataDelete";
import { useTaskDataCompleted } from "../../../../components/hooks/useTaskDataCompleted";

export function Tasks() {
  const { data } = useTaskData();
  const deleteTaskMutation = useTaskDataDelete();
  const completeTaskMutation = useTaskDataCompleted();

  const totalTasksCount = data ? data.length : 0;

  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTaskMutation.mutateAsync(taskId);
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const handleCompleteTask = async (taskId: number) => {
    try {
      await completeTaskMutation.mutateAsync({
        taskId,
        newData: { completed: true },
      }); // Envia a atualização para o backend
    } catch (error) {
      console.error("Erro ao marcar tarefa como completa:", error);
    }
  };

  return (
    <TasksContainer>
      <TasksInfo>
        <CreatedTasks>
          <p>Tarefas criadas</p>
          <span>{totalTasksCount}</span>
        </CreatedTasks>
        <CompletedTasks>
          <p>Concluídas</p>
          <span>
            {data ? data.filter((task) => task.completed).length : 0} de{" "}
            {totalTasksCount}
          </span>
        </CompletedTasks>
      </TasksInfo>
      <div>
        {data
          ?.sort((a, b) => (a?.id || 0) - (b?.id || 0))
          .map((taskData) => (
            <TaskContent key={taskData.id}>
              <Task
                key={taskData.id}
                checked={taskData.completed}
                onClick={() => handleCompleteTask(taskData.id ?? -1)}
              >
                {taskData.completed ? (
                  <CheckCircle size={24} color="#5e60ce" weight="fill" />
                ) : (
                  <Circle size={24} color="#4ea8de" />
                )}
                <p>{taskData.description}</p>
              </Task>
              <button onClick={() => handleDeleteTask(taskData.id ?? -1)}>
                <TrashIcon className="trashIcon" size={20} />
              </button>
            </TaskContent>
          ))}
      </div>
    </TasksContainer>
  );
}
