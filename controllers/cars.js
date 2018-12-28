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
        const reqBody =req.value.body;//validated body
        const seller = await User.findById(reqBody.seller);
        //Create new car
        const newCar = reqBody;
        delete newCar.seller;

        const car = new Car(newCar);
        car.seller = seller;

        await car.save();
        //Add newly created car to the actual seller
        seller.cars.push(car);
        await seller.save();
        //we are done
        res.status(200).json(car);
    },

    getCar:async (req, res, next)=>{
        //validated
        const car = await Car.findById(req.value.params.carId);
        res.status(200).json(car);
    },

    replaceCar: async (req, res, next)=>{
       const {carId} = req.params; 
       const newCar = req.body;
       const result = await Car.findByIdAndUpdate(carId, newCar);
       res.status(200).json({
           success: true
       });
    }


};