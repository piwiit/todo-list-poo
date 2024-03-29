// DOM.js
import TaskList from './modules/TaskList';
import Task from './modules/Task';

const taskList = new TaskList();

function renderTasks() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Efface le contenu précédent

  const tasks = taskList.getAllTasks();
  tasks.forEach((task) => {
    const taskElement = document.createElement('div');
    console.log(task);
    taskElement.innerHTML = `
            <h3>${task.title}</h3>
        `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
      taskList.removeTask(task);
      renderTasks();
    });

    taskElement.appendChild(deleteButton);
    app.appendChild(taskElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const addTaskForm = document.createElement('form');
  const titleInput = document.createElement('input');
  const addButton = document.createElement('button');

  titleInput.placeholder = 'Titre de la tâche';
  addButton.textContent = 'Ajouter';

  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    if (title.trim() !== '') {
      const newTask = new Task(title);
      taskList.addTask(newTask);
      renderTasks();
      titleInput.value = '';
    }
  });

  addTaskForm.appendChild(titleInput);
  addTaskForm.appendChild(addButton);

  document.body.appendChild(addTaskForm);
  renderTasks();
});
