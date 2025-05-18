// Get references to input, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addTaskBtn.addEventListener('click', addTask);

// Also add task when Enter key is pressed
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');

  // Create a span to hold the task text
  const span = document.createElement('span');
  span.textContent = taskText;

  // Toggle "completed" class on click
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  // Add span and button to list item
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add list item to task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}
