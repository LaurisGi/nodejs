const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

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



app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
