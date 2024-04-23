import { Header } from "./componentes/Header";
import { NewTaskForm } from "./componentes/NewTaskForm";
import { Tasks } from "./componentes/Tasks";

export function Todos() {
  return (
    <div>
      <Header />
      <NewTaskForm />
      <Tasks />
    </div>
  );
}
