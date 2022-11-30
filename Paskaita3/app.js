const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

const CARS = [
    {id: 1, brand: 'BMW', model: '3', year: '2010', color: 'white'},
    {id: 2, brand: 'Audi', model: 'a3', year: '2015', color: 'red'}
]


const USERS = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Rose"},
    {id: 2, name: "Roze"},
    {id: 2, name: "Roadkills"},
    {id: 2, name: "Somroze"},
    {id: 2, name: "Somting"},
    {id: 3, name: "Else"}
]

app.get('/api/cars', (request, response) =>{
    response.send(CARS);
});
app.get('/api/cars/:id', (request, response) =>{
    const id = Number(request.params.id);

    const car = CARS.find((car) => car.id === id);

    if (!car) {
        response.status(400).send('Car was not found');
    }

    response.send(car)
});



app.get('/api/names/:stringStart', (req, res) => {
    const stringStart = req.params.stringStart.toLowerCase();

    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().indexOf(stringStart) === 0);
    res.send(filteredUsers);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
