window.onload = loadTasks;
var submitbtn = document.getElementById("submit-btn");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

function loadTasks() {

  if (localStorage.getItem("tasks") == null) return;


  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  tasks.forEach(task => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
      <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}">
      <i class="fa" onclick="removeTask(this)">&#xf014;</i>`;
    list.insertBefore(li, list.children[0]);
  });
}

function addTask() {
  const task = document.getElementById("task")
  const list = document.querySelector("ul");

  if (task.value === "") {
    alert("Please add some task!");
    return false;
  }
 
  if (document.querySelector(`input[value="${task.value}"]`)) {
    alert("Task already exist!");
    return false;
  }


  localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

 
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
  <input type="text" value="${task.value}" class="task">
  <i class="fa" onclick="removeTask(this)">&#xf014;</i>`;
  list.insertBefore(li, list.children[0]);

  task.value = "";
}

function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {

   
    if (task.task === event.parentNode.children[1].value) {
    
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}


