const Car = require('../models/car');
const User = require('../models/user');

module.exports = {
    index: async (req, res, next) =>{
        //Get all the cars
        const cars = await  Car.find({});
        res.status(200).json(cars);
    },

    newCar: async (req, res, next)=>{
        //Find the actual seller
        const seller = await User.findById(req.body.seller);
        //Create new car
        const newCar = req.body;
        delete newCar.seller;

        const car = new Car(newCar);
        car.seller = seller;

        await car.save();
        //Add newly created car to the actual seller
        seller.cars.push(car);
        await seller.save();
        //we are done
        res.status(200).json(car);
    }


};