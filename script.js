function addTask() {
  let task = document.getElementById("taskInput").value.trim();
  let date = document.getElementById("dateInput").value.trim();
  let list = document.getElementById("taskList");
  console.log(task);

  if (task === "") {
    alert("Please enter a task.");
    console.log("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
      <span>${task}</span>
      <span>${date}</span>
      <button onclick="deleteTask(this)" class="normal-btn"> Delete </button>
    `;

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  list.appendChild(li);
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";

  let calendarBtn = document.querySelector(".calendar-btn");
  document.getElementById("dateInput").style.display = "none";
  calendarBtn.style.display = "block";
}

function deleteTask(button) {
  let li = button.parentElement;
  li.remove();
}

function showCalendar() {
  let date = document.getElementById("dateInput");
  let calendarBtn = document.querySelector(".calendar-btn");
  console.log(date);

  calendarBtn.style.display = "none";
  date.style.display = "block";
  date.focus();
}
