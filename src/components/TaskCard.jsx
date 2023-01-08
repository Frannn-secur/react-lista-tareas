import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard(props) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">
        Con el titulo: {props.tarea.title}
      </h1>
      <p className="text-gray-500 text-sm">
        Descripcion: {props.tarea.description}
      </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300"
        onClick={() => {
          deleteTask(props.tarea.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;