import { PlusCircle } from "phosphor-react";
import { NewTaskContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskDataMutate } from "../../../../components/hooks/useTaskDataMutate";
import { TaskData } from "../../../../components/interface/TaskData";

const newTaskFormValidationSchema = zod.object({
  description: zod.string().min(1, "Informe a tarefa"),
});

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>;

export function NewTaskForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      description: "",
    },
  });

  const { mutate } = useTaskDataMutate();
  const description = watch("description");
  const isSubmitDisabled = !description;


  const submit = () => {
    const taskData: TaskData = {
      description: description,
      completed: false,
    };
    mutate(taskData);
    reset();
  };

  return (
    <NewTaskContainer>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          id="task"
          placeholder="Adicione uma nova tarefa"
          {...register("description")}
        />
        <button type="submit" disabled={isSubmitDisabled}>
          Criar
          <PlusCircle size={18} color="#ffffff" />
        </button>
      </form>
    </NewTaskContainer>
  );
}