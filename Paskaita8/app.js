const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;
const mongoDB = 'mongodb+srv://laurisgi:marius122@cluster0.3roaw6u.mongodb.net/school-database?retryWrites=true&w=majority'
// prisijungimo duomenis per connect per atlasa

app.use(cors());
app.use(express.json());


// prisijuniame
mongoose.connect(mongoDB);

const db = mongoose.connection

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDb!'));


/// prisijungu
// suradome prisijungimo schema

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const carModel = mongoose.model('car', carSchema);

app.get('/cars', async (req, res) => {
    const cars = await carModel.findOne({brand: 'Audi'})
    res.send(cars)
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    grade:{ type: Number,
        required: true
    }
});

const studentModel = mongoose.model('student', userSchema);

app.post('/students', async (req, res) => {
    const {name, surname, grade} = req.body;
    await studentModel.create({name, surname, grade});
    res.send('students');
});

app.get('/students', async (req, res) => {
    const students = await studentModel.find()
    res.send(students)
});
app.get('/students/:name', async (req, res) => {
    const students = await studentModel.find( {name: {$regex: new RegExp(req.params.name, "i")}});
    res.send(students)
});
app.get('/students', async (req, res) => {
    const { sort } = req.query;

    let sortValue = 0;
    if (sort === 'asc') {
        sortValue = 1;
    } else if (sort === 'desc') {
        sortValue = -1;
    }
    
    const sortedStudents  = await studentModel.find();
    console.log(sortedStudents)
    res.send(sortedStudents)
});





app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));