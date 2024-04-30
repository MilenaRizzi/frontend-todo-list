import { CheckCircle, Circle, PencilLine, Trash } from "phosphor-react";
import {
  CompletedTasks,
  CreatedTasks,
  Icons,
  ModalChildren,
  Task,
  TaskContent,
  TasksContainer,
  TasksInfo,
} from "./styles";
import { useTaskData } from "../../../../components/hooks/useTaskData";
import { useTaskDataDelete } from "../../../../components/hooks/useTaskDataDelete";
import { useTaskDataUpdate } from "../../../../components/hooks/useTaskDataUpdate";
import { useState } from "react";

import { useTaskDataUpdateDescription } from "../../../../components/hooks/useTaskDataUpdateDescription";
import { Modal } from "../Modal";


export function Tasks() {
  const { data } = useTaskData();
  const deleteTaskMutation = useTaskDataDelete();
  const completeTaskMutation = useTaskDataUpdate();
  const updateTask = useTaskDataUpdateDescription();
  const [editingTask, setEditingTask] = useState({ id: 0, description: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (taskId: number, description: string) => {
    setEditingTask({ id: taskId, description });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      });
    } catch (error) {
      console.error("Erro ao marcar tarefa como completa:", error);
    }
  };

  const handleUpdateTask = async (taskId: number) => {
    try {
      await updateTask.mutateAsync({
        taskId,
        newData: {
          description: editingTask.description,
        },
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
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
                checked={taskData.completed !== undefined ? taskData.completed : false}
                onClick={() => handleCompleteTask(taskData.id ?? -1)}
              >
                {taskData.completed ? (
                  <CheckCircle size={24} color="#5e60ce" weight="fill" />
                ) : (
                  <Circle size={24} color="#4ea8de" />
                )}
                <p>{taskData.description}</p>
              </Task>
              <Icons>
                <button
                  onClick={() =>
                    handleOpenModal(
                      taskData.id ?? -1,
                      taskData.description ?? ""
                    )
                  }
                >
                  <PencilLine size={18} color="#808080" />
                </button>
                <button onClick={() => handleDeleteTask(taskData.id ?? -1)}>
                  <Trash className="trashIcon" size={18} color="#808080" />
                </button>
              </Icons>
            </TaskContent>
          ))}
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <ModalChildren key={editingTask.id}>
            <h1>Digite a nova tarefa</h1>
            <input
              type="text"
              value={editingTask.description}
              onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
            />
            <div>
              <button onClick={() => handleUpdateTask(editingTask.id)}>Salvar</button>
              <button onClick={handleCloseModal} >Cancelar</button>
            </div>
          </ModalChildren>
        </Modal>
      )}
    </TasksContainer>
  );
}
