const tasks = ["Limpiar la pieza", "Hacer las compras", "Lavar la ropa"];

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

const showTasks = () => {
  taskList.innerHTML = ""; //limpiamos la lista de tareas
  tasks.forEach((task, index) => {
    // cargamos la lista de tareas con el array
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTask(${index})">❌</button>`;
    taskList.appendChild(li);
  });
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

addButton.addEventListener("click", addTask);
showTasks();
