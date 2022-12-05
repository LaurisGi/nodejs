const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());


const TASKS = [
    {id: 1, title: 'Isplauti indus', isDone: false},
    {id: 2, title: 'somtin else', isDone: false},
    {id: 3, title: 'do someting', isDone: false},
    {id: 4, title: 'do someting 3', isDone: false}
]


app.get('/api/tasks', (req, res) => {
    res.send(TASKS);
});
app.get('/api/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = TASKS.find((task) => task.id === id);

    if (!task) {
        res.status(400).send('Task was not found');
    }


    res.send(task);

});

app.post('/api/tasks', (req, res) => {
    const lastTask = TASKS[TASKS.length -1];
    const newTask = {...req.body, id: lastTask.id + 1, isDone: false };

    TASKS.push(newTask);
    res.send(TASKS);
});
// app.put('/api/tasks/:id', (req, res) => {
//     const { id } = req.params;
//     const { title } = req.body;
//     const tasks = TASKS.find(p => p.id == id);


//     tasks.title = title;
//     return res.json(TASKS)
// });

app.put('/api/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const newTask = req.body;

    const updateTasks = TASKS.map((task) => {
        if (task.id === id) {
            return {

             ...newTask,
             id: task.id
        };
    }
        return task;
    });


    TASKS = [...updateTasks];
    res.send(TASKS);
});


app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
