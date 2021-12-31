function addTask() {
  const taskTitle = document.querySelector("#task-title").value;
  
  
  if (taskTitle) {
  
  const template = document.querySelector(".template");
  
  const newTask = template.cloneNode(true);
  
  newTask.querySelector(".task-title"). textContent = taskTitle;
  
  newTask.classList.remove("template");
  newTask.classList.remove("hide");
  
  const list = document.querySelector("#task-list");
  
  list.appendChild(newTask);
  
  document.querySelector("#task-title").value = "";
  
  const doneBtn = newTask.querySelector(".done-btn").addEventListener('click', function() {
    completeTask(this);
  });
  
  const removeBtn = newTask.querySelector(".remove-btn").addEventListener('click', function() {
    removeTask(this);
  });
  
};

};

function completeTask(task) {
  const taskToComplete = task.parentNode;
  
  taskToComplete.classList.toggle("done");
};

function removeTask(task) {
  task.parentNode.remove(true);
};


const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  addTask();
});



