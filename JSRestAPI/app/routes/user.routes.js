module.exports = app => {
    const user = require('../controllers/user.controller.js');
  
    var router = require('express').Router();

    // Create a new User
    router.post('/', function (req, res) {
        user.create;
    });

    // Retrieve all Users
    router.get('/', user.findAll);

    // Retrieve a single User with id
    router.get('/:id', function (req, res) {
        user.findOne;
    });

    // Update a User with id
    router.put('/:id', function (req, res) {
        user.updateById;
    });

    // Delete a User with id
    router.delete('/:id', function (req, res) {
        user.deleteById;
    });

    app.use('/app/user', router);
};