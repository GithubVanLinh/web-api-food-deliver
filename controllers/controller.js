const Foods = require('../models/food.model');
const Diner = require('../models/diner.model');
const Food = require("../models/food.model");

function response(res, kq){
    rt = {};
        rt.status = "OK";
        rt.data = kq;
        res.json(rt); 
}

function addToFood(id,menu){
    menu.forEach(food =>{
        Food.findOne({name: food.name}, function(err,res){
            if(err){
                console.log("false");                
            }
            if(res!= null){
                res.diner.push(id);
                res.save();
            }
            if(res == null){
                newFood = new Food({name: food.name});
                newFood.diner.push(id);
                newFood.save();
            }
            
        })
    })
}

//menu and name of food
function deleteFoodFromMenu(menu, foodName){
    menu.forEach(function(element, index){
        if(element.name == foodName){
            menu.splice(index, 1);
        }
    })
}

function deleteFoodFromFood(id, foodName){
    console.log(foodName);
    
    Food.findOne({name: foodName}, function(err, res){
        if(err)
        {
            console.log(err);
        }
        else{
            if(res!=null)
            {
                res.diner.forEach(function(element, index){
                    if(element == id){
                        res.diner.splice(index, 1);
                        res.save();
                    }
                });
            }
            
        }
    });
}

module.exports = {
    default: function(req, res, next){
        res.render("index",{title : "API"});
    },
    getAll: function(req, res, next){
        const query = req.query;
        Diner.find(query)
        .sort({average: -1})
        .exec(function(err,kq){
            res.json(kq);
        });
    },
    getAllFood: function(req, res, next){
        Food.find({}).exec(function(err, foods){
            if(!err)
                res.json(foods);
        })
    },
    getByID: function(req, res, next){        
        Diner.find({name: req.params.ID})
        .sort({average: -1})
            .exec(function(err, kq){
                res.json(kq);
            }
        )
    },
    getByFoodName: function(req, res, next){ 
        const name = req.query.name;
        const district = req.query.dictrict;
        
        Food.findOne({name:name})
        .populate("diner")
        .sort({average: -1})
        .exec(function(err, response){
            if(err)
                res.send(err);
            else{                
                if(response!= null){                    
                    kt = {};
                    if(district)
                    {                        
                        kt.diner =[];
                        response.diner.forEach(element => {
                            if(element.district==district)
                            {
                                kt.diner.push(element);
                            }
                                
                        });         
                    }
                    else{
                        kt.diner = response.diner;
                    }       
                    kt.count = kt.diner.length;
                    res.json(kt);
                    
                }
                else{
                    res.send("null");
                }
            }
        })
    },

    //district, street, number, name, timeOpen, timeClose
    addDiner: function(req, res, next){

        if(req.body.data == null){
            res.send("Oops..., something went wrong!");
            return;
        }
        const dinerInfo = JSON.parse(req.body.data);     
        var diner = new Diner(dinerInfo);
        diner.save(function(err, respon)
        {
        if(err){
            console.log(err.message);
            res.send(err.message)
        }    
        addToFood(respon._id,respon.menu);
        response(res, respon);
        });
    },

    deleteDiner: function(req, res, next){
        const id = req.params.id;
        Diner.findOneAndDelete({_id: id},async function(err, response){
            if(err){
                res.send(err.message);                
            }
            else{
                res.json(response);
                await response.menu.forEach(element => {
                    Food.findOne({name: element.name})
                    .exec(function(err, response){
                        if(err){
                        }
                        else{
                            response.diner.forEach(function(value, index) {
                                if(value==id){
                                    response.diner.splice(index,1);
                                    return;
                                }
                            });
                            response.save();
                        }
                    });
                });
                console.log(response.name +" has removed");
            }
        });
    },

    deleteFood: function(req, res, next){
        const ID = req.params.id;
        if(req.body.name == null){
            return;
        }
        const foodName  = req.body.name;
        console.log(ID +": " +foodName);        
        Diner.findById(ID, function(err, response){
            if(err){
                console.log(err.message);
                res.send(err.message);                
            }
            else{
                if(response!=null){
                    deleteFoodFromMenu(response.menu, foodName);
                    deleteFoodFromFood(ID, foodName);
                    response.save();
                    res.json(response);
                }
                else{
                    res.send("null");
                }
            }
        })
    },

    getByDistrict: function(req, res, next){
        const district = req.params.name;        
        Diner.find({district: districtToLink(district)}, function(err, diners){
            if(err){
                console.log(err);
                res.send(err);
            }
            else if(diners !== null){
                res.json(diners);
            } else{
                res.json("null");
            }
        })
        .sort({average: -1});
    },
}
function districtToLink(district){
    switch (district){
        case "tan_phu":
            return "tân phú";
        case "tan_binh":
            return "tân bình";
        case "binh_tan":
            return "bình tân";
        case "binh_chanh":
            return "bình chánh";
        case "binh_thanh":
            return "bình thạnh";
        case "thu_duc":
            return "thủ đức";
        case "go_vap":
            return "gò vấp";
        case "hooc_mon":
            return "hooc môn";
    }
    return district;
}