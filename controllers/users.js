 const User = require('../models/user');

 module.exports = {
  // Promises
     index: (req, res, next) => {
        User.find({})
        .then((users)=>{
        res.status(200).json(users);
        })
        .catch(err=>{
                next(err);
            });
     },
     newUser: (req, res, next) => {
         const newUser = new User(req.body);
         newUser.save()
         .then(user => {
             res.status(201).json(user);
         })
         .catch(err =>{
             next(err);
         });
         
     }
 };

 /**
  we can interact with mongoose in 3 different ways 
 1) Callback
 2) Promises
 3)Async/Await(Pomises)
  
 */
