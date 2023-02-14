module.exports = app => {
    const user = require('../controllers/user.controller.js');
  
    var router = require('express').Router();

    // Create a new User
    router.post('/', user.create);

    // Retrieve all Users
    router.get('/', user.findAll);

    // Retrieve a single User with id
    router.get('/:tagUtilisateur', user.findOne);

    // Update a User with id
    //router.put('/:tagUtilisateur', user.updateById);

    // Delete a User with id
    router.delete('/:id', function (req, res) {
        user.deleteById;
    });

    app.use('/app/user', router);
};