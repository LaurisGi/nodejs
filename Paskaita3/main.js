const tasksContainer = document.getElementById('tasks');

const BASE_ENDPOINT = 'http://localhost:3000';
const GET_TASKS_ENDPOINT = BASE_ENDPOINT + '/api/tasks';
const GET_SPECIFIC_TASKS_ENDPOINT = GET_TASKS_ENDPOINT + '/1';


fetch(GET_TASKS_ENDPOINT)
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