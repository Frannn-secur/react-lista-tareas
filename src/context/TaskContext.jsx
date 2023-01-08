import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/task";

export const TaskContext = createContext();

//Este es el componente que engloba a los demas componentes por eso le ponemos provider
export function TaskContextProvider(props) {
  const [tareas, setTareas] = useState([]);

  function createTask(tarea) {
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        title: tarea.title,
        description: tarea.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTareas(tareas.filter((tarea) => tarea.id !== taskId));
  }

  useEffect(() => {
    setTareas(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tareas,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
