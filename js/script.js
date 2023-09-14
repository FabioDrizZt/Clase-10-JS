let tasks = [
  { name: "Preparar un desfile de moda", completed: false },
  { name: "Cuidar a sus mascotas", completed: false },
  { name: "Hacer ejercicio en su gimnasio", completed: false },
  { name: "Ir de compras para actualizar su guardarropa", completed: false },
  { name: "Estudiar para su próxima aventura", completed: false },
  { name: "Ayudar a su comunidad en proyectos voluntarios", completed: false },
  { name: "Organizar una fiesta de cumpleaños", completed: false },
  { name: "Diseñar ropa y accesorios", completed: false },
  { name: "Viajar por el mundo en su jet privado", completed: false },
  { name: "Participar en competencias deportivas", completed: false },
];
const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const searchInput = document.querySelector("#searchInput");

const showTasks = (lista = tasks) => {
  taskList.innerHTML = ""; //limpiamos la lista de tareas
  lista.forEach((task, index) => {
    // cargamos la lista de tareas con el array
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.name}</span>
      <div>
        <button onclick="editTask(${index})">🖊</button>
        <button onclick="removeTask(${index})">❌</button>
      </div>`;
    taskList.appendChild(li);
  });
};

const editTask = (index) => {
  //funcion que nos permite editar las tareas del usuario
  const nuevoTexto = prompt("Editar tarea", tasks[index]).trim();
  if (nuevoTexto == "") return alert("Tarea vacia");
  tasks[index] = nuevoTexto;
  showTasks();
};

const removeTask = (index) => {
  //eliminamos una tarea del arreglo y actualizamos la vista
  tasks.splice(index, 1); //elimina un elemento en especifico
  showTasks();
};

const addTask = () => {
  taskInput.value = taskInput.value.trim();
  if (taskInput.value == "") return alert("Tarea vacia");
  tasks.push({ name: taskInput.value, completed: false });
  taskInput.value = "";
  showTasks();

  localStorage.setItem("tareas", JSON.stringify(tasks));
};

const searchTasks = () => {
  //buscamos las palabras que ingresen en nuestro input
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showTasks(filteredTasks);
};

addButton.addEventListener("click", addTask);
searchInput.addEventListener("input", searchTasks);
const tareasAlmacenadas = localStorage.getItem("tareas");
if (tareasAlmacenadas) {
  tasks = JSON.parse(tareasAlmacenadas);
  console.log(tasks);
}
showTasks();
