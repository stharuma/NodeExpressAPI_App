 const User = require('../models/user');

 module.exports = {
     //Callback
     index: (req, res, next) => {
         User.find({}, (err, users) => {
             if (err) {
                 next(err);
             }
             res.status(200).json(users);
         })
     },
     newUser: (req, res, next) => {
         const newUser = new User(req.body);
         newUser.save((err, user) => {
             res.status(201).json(user);
         });
     }
 };

 /**
  we can interact with mongoose in 3 different ways 
 1) Callback
 2) Promises
 3)Async/Await(Pomises)
  
 */
