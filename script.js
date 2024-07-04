function addTask() {
  let task = document.getElementById("taskInput").value.trim();
  let list = document.getElementById("taskList");
  console.log(task);

  if (task === "") {
    alert("Please enter a task.");
    console.log("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
      ${task}
      <button onclick="deleteTask(this)"> Delete </button>
    `;

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  list.appendChild(li);
  document.getElementById("taskInput").value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}
