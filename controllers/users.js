 const User = require('../models/user');
 const Car = require('../models/car');

 
 module.exports = {
     // Async/Await
     index: async (req, res, next) => {
         const users = await User.find({});
         // throw new Error('dummy error'); 
         res.status(200).json(users);
     },
     newUser: async (req, res, next) => {
         //console.log('req.value',req.value);
         const newUser = new User(req.value.body);
         const user = await newUser.save();
         res.status(201).json(user);
     },
     getUserById: async (req, res, next) => {
         // no validate userId
         //const {userId} = req.params; //const userId=req.pqrqms.userId 
         // validate UserId
         const {userId} =req.value.params;
         const user = await User.findById(userId);
         res.status(201).json(user);
     },
     //enforce that req.body must contain all the feilds
     replaceUser: async (req, res, next) => {
         const {userId} = req.params; //const userId=req.pqrqms.userId 
         const newUser = req.body;
         const result = await User.findByIdAndUpdate(userId, newUser);
         console.log('result', result);
         res.status(200).json({
             success: true
         });
     },
     //req.body may contain any number of feilds
     updateUser: async (req, res, next) => {
         const {userId} = req.params; //const userId=req.pqrqms.userId 
         const newUser = req.body;
         const result = await User.findByIdAndUpdate(userId, newUser);
         console.log('result', result);
         res.status(200).json({
             success: true
         });
     },
     getUserCars: async (req, res, next) => {
         const {userId} = req.params;
         const user = await User.findById(userId).populate('cars');
         console.log('user', user);
         res.status(200).json(user.cars);
    },
    newUserCar: async (req, res, next) => {
        const {userId} = req.params;
        //create new car
        const newCar = new Car(req.body);
        //get User
        const user = await User.findById(userId);
        //assign user is a car's seller
        newCar.seller =user;
        //seve the car
        await newCar.save();
        //add the car to the user's selling array 'cars'
        user.cars.push(newCar);
        //save the user
        await user.save();
        res.status(201).json(newCar);
    }
    
 };

 /**
  we can interact with mongoose in 3 different ways 
 1) Callback
 2) Promises
 3)Async/Await(Pomises)
  
 */
