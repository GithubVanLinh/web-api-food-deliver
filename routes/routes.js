const controller = require("../controllers/controller");

module.exports = function(app)
{

    app.get('/', controller.default);
    app.get('/all',controller.getAll);
    app.post('/',controller.addDiner);

    app.get('/foods',controller.getByFoodName);
    app.delete('/delete/:id', controller.deleteFood);
    
    app.get('/:id', controller.getByID);
    //app.put('/:id', controller.addFood);

    app.delete('/:id',controller.deleteDiner);

}