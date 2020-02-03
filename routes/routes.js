const controller = require("../controllers/controller");

module.exports = function(app)
{
    


    app.get('/', controller.default);
    app.post('/',controller.addDiner);
    
    app.get('/all',controller.getAll);
    
    app.get('/search',controller.getByFoodName);

    app.get('/all/food', controller.getAllFood);

    app.get('/district/:name', controller.getByDistrict);

    //name = ???

    app.delete('/delete/:id', controller.deleteFood);
    
    app.get('/:id', controller.getByID);
    //app.put('/:id', controller.addFood);
    app.delete('/:id',controller.deleteDiner);


}