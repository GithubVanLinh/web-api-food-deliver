const controller = require("../controllers/controller");

module.exports = function(app)
{
    


    app.get('/', controller.default);
    app.post('/',controller.addDiner);
    
    app.get('/all',controller.getAll);

    app.get('/all/food', controller.getAllFood);

    app.get('/district/:name', controller.getByDistrict);

    //name = ???
    app.get('/foods/:name',controller.getByFoodName);

    app.delete('/delete/:id', controller.deleteFood);
    
    app.get('/:id', controller.getByID);
    //app.put('/:id', controller.addFood);
    app.delete('/:id',controller.deleteDiner);


}