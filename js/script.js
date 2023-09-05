const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

const addTask = () => {
  if (taskInput.value.trim() == "") return alert("Tarea vacia");
  console.log("Tarea valida");
};

addButton.addEventListener("click", addTask);
