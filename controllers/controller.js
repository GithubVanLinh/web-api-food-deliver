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
    }
}