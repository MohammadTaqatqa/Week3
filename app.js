// To-Do List App
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  let tasks = [];

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "10px";

      deleteBtn.addEventListener("click", function () {
        tasks.splice(index, 1);
        renderTasks();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  addTaskBtn.addEventListener("click", function () {
    const newTask = taskInput.value.trim();

    if (newTask !== "") {
      tasks.push(newTask);
      taskInput.value = "";
      renderTasks();
    }
  });

  // ============================
  // ES6 Array Methods Practice
  // ============================
  console.log("=== Array Methods Practice ===");

  const users = [
    { id: 1, name: "Mohammad", age: 25 },
    { id: 2, name: "ahmad", age: 17 },
    { id: 3, name: "hadi", age: 30 },
    { id: 4, name: "ali", age: 15 },
  ];

  // 1. map
  const userNames = users.map(user => user.name);
  console.log("User Names:", userNames);

  // 2. filter
  const adults = users.filter(user => user.age >= 18);
  console.log("Adults:", adults);

  // 3. reduce
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  console.log("Total Age:", totalAge);

  // 4. find
  const minorUser = users.find(user => user.age < 18);
  console.log("First Minor User:", minorUser);

  // 5. forEach
  users.forEach(user => console.log("User:", user.name, "Age:", user.age));
});
