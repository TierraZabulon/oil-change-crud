const Car = require("../models/Car");

module.exports = {
  getCars: async (req, res) => {
    console.log(req.user);
    try {
      const cars = await Car.find({ userId: req.user.id });
      // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
      // res.json(cars)
      res.render("car.ejs", {
        /*todos: todoItems, left: itemsLeft,*/ cars: cars,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createCar: async (req, res) => {
    try {
      await Car.create({
        carMake: req.body.carMake,
        carModel: req.body.carModel,
        carYear: req.body.carYear,
        userId: req.user.id,
      });
      console.log("Car has been added!");
      res.redirect("/car");
    } catch (err) {
      console.log(err);
    }
  },
  // markComplete: async (req, res)=>{
  //     try{
  //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
  //             completed: true
  //         })
  //         console.log('Marked Complete')
  //         res.json('Marked Complete')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  // markIncomplete: async (req, res)=>{
  //     try{
  //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
  //             completed: false
  //         })
  //         console.log('Marked Incomplete')
  //         res.json('Marked Incomplete')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  deleteCar: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Car.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Car");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
