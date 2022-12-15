const carModel = require('./models/car');
const userModel = require('./models/user');

const express = require('express');
const advertModel = require('./models/advers');
const router = express.Router();

router.get('/cars', async (req, res) => {
    const cars = await carModel.find().sort({ year: 1 });
    res.send(cars);
});

router.get('/cars/:brand', async  (req, res) => {
    const brand = req.params.brand.toLowerCase();
    // const cars = await carModel.find(
    //     { 
    //         brand: { 
    //             $regex: new RegExp(brand, 'i') 
    //         } 
    //     }
    // );
    const cars = await carModel.find({ brand });
    res.send(cars);
});

router.post('/cars', async (req, res) => {
    const { brand, model, year, price } = req.body;
    await carModel.create({ brand, model, year, price });
    const cars = await carModel.find();
    res.send(cars);
});

router.get('/users', async (req, res) => {
    const { sort } = req.query;

    let users = await userModel.find();
    
    if (sort === 'asc') {
        users = await userModel.find().sort({ surname: 1 });
    } else if (sort === 'desc') {
        users = await userModel.find().sort({ surname: -1 });
    }
    
    res.send(users);
});

// app.get('/users/asc', async (req, res) => {
//     const users = await userModel.find().sort({ surname: 1 });
//     res.send(users);
// });

// app.get('/users/desc', async (req, res) => {
//     const users = await userModel.find().sort({ surname: -1 });
//     res.send(users);
// });

router.get('/users/:name', async (req, res) => {
    const { name } = req.params;
    const users = await userModel.find(
        { 
            name: { 
                $regex: `^${name}$`,
                $options: 'i'
            } 
        }
    );
    res.send(users);
});

router.post('/users', async (req, res) => {
    const { name, surname, role } = req.body;
    await userModel.create({ name, surname, role });
    const users = await userModel.find();
    res.send(users);
});

router.get('/adverts', async (req, res) => {
    const adverts = await advertModel.find();
    res.send(adverts);
})

router.post('/adverts', async (req, res) => {
    const { brand, model, price, user_id } = req.body;
    await advertModel.create({ brand, model, price, user_id });
    const adverts = await advertModel.find();
    res.send(adverts);
});

router.patch('/adverts/:id', async (req, res) => {
    const { id } = req.params;
    // const { brand, model, price, user_id } = req.body;
    await advertModel.updateOne({ _id: id }, req.body);
    const adverts = await advertModel.find();
    res.send(adverts);
})
router.delete('/adverts/:id', async (req, res) => {
    const { id } = req.params;
    await advertModel.deleteOne({ _id: id });
    const adverts = await advertModel.find();
    res.send(adverts);
})



module.exports = router;