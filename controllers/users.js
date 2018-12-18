 const User = require('../models/user');

 module.exports = {
     // Async/Await
    index: async (req, res, next) => {
         try {
             const users = await User.find({});
             res.status(200).json(users);
         } catch (err) {
             next(err);
         }
     },
     newUser: async (req, res, next) => {
         try {
             const newUser = new User(req.body);
             const user =await newUser.save();
             res.status(201).json(user);
         } catch (error) {
             next(err);
         }
     }
 };

 /**
  we can interact with mongoose in 3 different ways 
 1) Callback
 2) Promises
 3)Async/Await(Pomises)
  
 */
