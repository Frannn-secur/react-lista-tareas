import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const manejadorFormulario = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejadorFormulario} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          placeholder="Escribe Tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2'
          />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <button className="bg-indigo-500 text-white px-3 py-1">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
