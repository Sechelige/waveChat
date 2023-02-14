const user = require('../models/user.model');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    // Create a User
    const nUser = new user({
        nomUtilisateur: req.body.nomUtilisateur,
        photoProfil: req.body.photoProfil,
        mdp: req.body.mdp,
        dateCreation: req.body.dateCreation,
        email: req.body.email
    });

    // Save User in the database
    user.create(nUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the User.'
            });
        else res.send(data);
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    user.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving users.'
            });
        else res.send(data);
    });
};

// Find a single User with a userId

exports.findOne = (req, res) => {
    user.findById(req.params.tagUtilisateur, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.tagUtilisateur}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutorial with id " + req.params.tagUtilisateur
          });
        }
      } else res.send(data);
    });
  };


exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    user.updateById(
        req.params.tagUtilisateur,
        new user(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.tagUtilisateur}.`
                    });
                } else {
                    res.status(500).send({
                        message: 'Error updating User with id ' + req.params.tagUtilisateur
                    });
                }
            } else res.send(data);
        }
    );
};
/*

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
    user.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete User with id ' + req.params.userId
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};*/
