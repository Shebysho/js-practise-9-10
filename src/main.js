import { nanoid } from 'nanoid';
const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
form.addEventListener('submit', handleForm);
const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
function handleForm(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements.taskName.value);
  console.log(event.currentTarget.elements.taskText.value);
  const taskName = event.currentTarget.elements.taskName.value;
  const taskText = event.currentTarget.elements.taskText.value;
  const newTask = {
    taskName,
    taskText,
    id: nanoid(),
  };
  console.log(createMarkup(newTask));
  const markup = createMarkup(newTask);
  taskList.insertAdjacentHTML('beforebegin', markup);
  tasks.push(newTask);
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
function createMarkup({ taskText, taskName, id }) {
  return `  <li class="task-list-item">
     <button class="task-list-item-btn" data-id="${id}">Delete</button>
     <h3>${taskName}</h3>
     <p>${taskText}</p>
     </li>`;
}
console.log(tasks);
