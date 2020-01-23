const Foods = require('../models/food.model');
const Diner = require('../models/diner.model');
const Address = require("../models/address.model");
const Food = require("../models/food.model");


module.exports = {
    getAll: function(req, res, next){
        Diner.find({})
            .populate('address')
            .populate('menu')
            .exec(function(err, kq){
                res.json(kq);
            }
        )
    },
    getByName: function(req, res, next){        
        Diner.find({name: req.params.name})
            .populate('address')
            .populate('menu')
            .exec(function(err, kq){
                res.json(kq);
            }
        )
    },

    //district, street, number, name, timeOpen, timeClose
    addDiner: function(req, res, next){        
        const dinerInfo = req.body;
        var address = new Address({district: dinerInfo.district, street: dinerInfo.street, number: dinerInfo.number});
        
        address.save(function(err, resAdd){
            if(err) {console.log(err.message);
                res.send(err.message);
            }
            else{
                var diner = new Diner();
                diner.name = dinerInfo.name;
                diner.address = address._id;
                diner.timeOpen = dinerInfo.timeOpen;
                diner.timeClose = dinerInfo.timeClose;
                diner.save(function(err, respon)
                {
                if(err){
                    console.log(err.message);
                    res.send(err.message)
                }
        
                res.json(respon);  
                });
            }
        });
        

        

        

        // var address = new Address({district: "Bình Tân", street: "3/2", number: "42B"});
        // address.save(function(err, res){});

        // menu = [];
        // food1 = new Food({name: "Xôi", price: 25000, rate: 10});
        // food1.save();
        // food2 = new Food({name: "Thịt", price: 10000, rate: 10});
        // food2.save();
        // menu.push(food1._id, food2._id);

        // var diner = new Diner();
        // diner.name = "Xôi Phú";
        // diner.address = address._id;
        // diner.menu = menu;
        // diner.timeOpen = 15;
        // diner.timeClose = 23.5;
        // diner.save(function(err, respon)
        // {
        // if(err) console.log(err);
        // res.json(respon);  
        // });
    },

    addFood: function(req, res, next){
        const id = req.params.id;
        Diner.findById(id ,function(err, response){
            if(err){
                console.log(err.message);
                res.send(err.message);               
            }
            else{
                var foodInfo = req.body;
                var newFood = new Food({name: foodInfo.name, price : foodInfo.price, rate: foodInfo.rate});
                newFood.save(function(err, food){
                    if(err){
                        console.log(err.message);
                        res.send(err.message);                        
                    }
                    else{
                        response.menu.push(newFood._id);
                        response.save(function(err, foods){
                            if(err){
                                console.log(err.message);
                                res.send(err.message);                        
                            }
                            else{          
                                console.log(response.name +": "+ food.name + " has added");                                                      
                                res.json(response);
                            }
                        });
                    }
                });
            }
        });
    },

    deleteDiner: function(req, res, next){
        Diner.findOneAndDelete({_id: req.params.name},async function(err, response){
            if(err){
                res.send(err.message);                
            }
            else{
                res.json(response);
                await Address.findByIdAndDelete(response.address,function(err, res){
                    console.log(response.name +": address has removed");                    
                });
                await response.menu.forEach(element => {
                    Food.findByIdAndDelete(element,function(err, res){
                        console.log(res.name+ ": food has removed");                    
                    });
                });
                console.log(response.name +" has removed");
            }
        });
    },

    deleteFood: function(req, res, next){
        Diner.findById(req.params.name, function(err, response){
            if(err){
                console.log(err.message);
                res.send(err.message);                
            }
            else{
                response.menu.forEach(function(element,index){
                    if(element == req.params.id){
                        Food.findOneAndDelete({_id: element}, function(err, respon){
                            if(err){
                                res.send(err.message);                
                            }
                            else{
                                if(respon !== null)
                                {
                                    console.log(response.name + ": "+ respon.name + " has removed");
                                    response.menu.splice(index, 1);
                                    response.save(function(err,respon){
                                        if(err)
                                            res.send(respon);
                                        else{
                                            res.json(respon);                                            
                                        }
                                    });
                                }
                                else{
                                    res.send("No food to remove");
                                }                         
                            }
                        });
                    }
                })
            }
        })
    }
}