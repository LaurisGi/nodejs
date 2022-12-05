const tasksContainer = document.getElementById('tasks');
const addTaskForm = document.getElementById('addTaskForm');
const taskTitleInput = document.getElementById('taskTitleInput');

const BASE_ENDPOINT = 'http://localhost:3000';
const TASKS_ENDPOINT = BASE_ENDPOINT + '/api/tasks';
const GET_SPECIFIC_TASKS_ENDPOINT = TASKS_ENDPOINT + '/1';

addTaskForm.addEventListener('submit', (event) => {
    // event.preventDefault();
    fetch(TASKS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: taskTitleInput.value })
    });
});


fetch(TASKS_ENDPOINT)
    .then((res) => res.json())
    .then((tasks) => {
        tasks.forEach((tasks) => {
            const card = document.createElement('div');
            const title = document.createElement('h2');
            title.textContent = tasks.title;

            title.style.color = tasks.isDone ? 'green' : 'red';

            card.appendChild(title);

            tasksContainer.appendChild(card);
        });
    });


    fetch(GET_SPECIFIC_TASKS_ENDPOINT)
    .then((res) => res.json())
    .then((tasks) => {
        const task = document.createElement('h1');
        task.textContent = `Pirmas taskas eileje yra ${task.title}`

        console.log(tasks);
    
    });