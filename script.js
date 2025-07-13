let tasks = [];


const addBtn = document.getElementById("addTaskButton");
const input = document.getElementById("taskInput");
const taskName = input.value.trim();

// Event listener for the add task button
addBtn.onclick = () =>{
	const taskName = input.value.trim();
	if (taskName) {
		addTask(taskName);
		input.value = "";
	} else {
		alert("Please enter a task name.");
	}
};


function renderTasks() {
	const taskList = document.getElementById("taskList");
	taskList.innerHTML = "";

	tasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `
		<strong>${task.name}</strong>
		<em>(${task.createdAt})</em>
		`;

		// Create edit button
		const editButton = document.createElement("button");
		editButton.textContent = "Edit";
		editButton.onclick = () => editTask(index);
		listItem.appendChild(editButton);

		// Create delete button
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = () => deleteTask(index);
		listItem.appendChild(deleteButton);
		taskList.appendChild(listItem);

		console.log(`Task: ${task.name}, Created At: ${task.createdAt}`);
	});
}

// Event listener for the add button
function addTask(task) {
	const newTask = {
		name: task,
		createdAt: new Date().toLocaleString(),
	};

	// Add the new task to the tasks array
	tasks.push(newTask);

	// Render the updated task list
	renderTasks();
}

// Event listener function for the edit button
function editTask(index) {
	const newName = prompt("Enter new task name:", tasks[index].name);
	if (newName) {
		tasks[index].name = newName;
		renderTasks();
	}
}

// Event listener function for the delete button
function deleteTask(index) {
	if (confirm("Are you sure you want to delete this task?")) {
		tasks.splice(index, 1);
		renderTasks();
	}
}

function avgGrades(value) {

	const answer =  value / 10;
	let grade;
	switch (answer) {
		case 10:
			grade = "A";
			break;
		case 5:
			grade = "C";
			break;
		default:
			grade = "F";
			break;
	}

	return grade;
}


console.log ("AVG GRADE: ", avgGrades(100));
console.log ("AVG GRADE: ", avgGrades(50));