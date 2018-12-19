 const User = require('../models/user');

 module.exports = {
     // Async/Await
     index: async (req, res, next) => {
         const users = await User.find({});
         // throw new Error('dummy error'); 
         res.status(200).json(users);
     },
     newUser: async (req, res, next) => {
         const newUser = new User(req.body);
         const user = await newUser.save();
         res.status(201).json(user);
     },
     getUserById:async (req, res, next) => {
         //console.log('req.param',req.params);
         const {userId} = req.params;//const userId=req.pqrqms.userId 
         const user= await User.findById(userId);
         res.status(201).json(user);
     },
     replaceUser:async (req, res, next) => {
        const {userId} = req.params;//const userId=req.pqrqms.userId 
        const newUser =req.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json(result);
    }

 };

 /**
  we can interact with mongoose in 3 different ways 
 1) Callback
 2) Promises
 3)Async/Await(Pomises)
  
 */
