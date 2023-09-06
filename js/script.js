const tasks = [
  "Preparar un desfile de moda",
  "Cuidar a sus mascotas",
  "Hacer ejercicio en su gimnasio",
  "Ir de compras para actualizar su guardarropa",
  "Estudiar para su próxima aventura",
  "Ayudar a su comunidad en proyectos voluntarios",
  "Organizar una fiesta de cumpleaños",
  "Diseñar ropa y accesorios",
  "Viajar por el mundo en su jet privado",
  "Participar en competencias deportivas",
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
      <span>${task}</span>
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
  tasks.push(taskInput.value);
  taskInput.value = "";
  showTasks();
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
showTasks();
