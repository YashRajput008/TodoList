document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

function addTask() {
  let task = document.getElementById("taskInput").value.trim();
  let date = document.getElementById("dateInput").value.trim();
  let priority = document.getElementById("priorityInput").value;
  let list = document.getElementById("taskList");

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.className = priority;
  li.innerHTML = `
    <div>${task}</div>
    <div>${date}</div>
    <div>${priority}</div>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  list.appendChild(li);
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("priorityInput").value = "low";
}

function deleteTask(button) {
  let li = button.parentElement;
  li.remove();
}

function showCalendar() {
  let dateInput = document.getElementById("dateInput");
  dateInput.style.display = "block";
  dateInput.focus();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const toggleButton = document.querySelector(".dark-mode-toggle");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
}
