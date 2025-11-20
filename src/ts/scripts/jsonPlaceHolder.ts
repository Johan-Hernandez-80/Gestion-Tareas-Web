import { Tarea } from "../models/Tarea.js";
import type { EstadoTarea } from "../models/Tarea.js";

type JsonPlaceholderTodo = {
  id: number;
  title: string;
  completed: boolean;
};

/**
 * Carga tareas desde la API de JSONPlaceholder y las convierte
 * en instancias de Tarea con un mapeo básico de campos.
 * @return Lista de tareas generadas a partir de los datos remotos.
 */
export async function loadTareasFromAPI(): Promise<Tarea[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: JsonPlaceholderTodo[] = await res.json();

  return data.map((d: JsonPlaceholderTodo) =>
    new Tarea(
      d.id,
      d.title,
      "",
      (d.completed ? "Cerrado" : "Pendiente") as EstadoTarea,
      "",
      0
    )
  );
}
