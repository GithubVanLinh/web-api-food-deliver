const controller = require("../controllers/controller");

module.exports = function(app)
{
    app.get('/',controller.getAll);
    app.post('/',controller.addDiner);

    
    app.get('/:name', controller.getByName);
    app.put('/:id', controller.addFood);

    app.delete('/:name',controller.deleteDiner);

    app.delete('/:name/:id', controller.deleteFood);
}