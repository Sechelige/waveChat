const user = require('../models/user.model');
const nodemailer = require('../models/nodemailer');

//Permet de créer un utilisateur dans la base de données
//route : /app/user (POST)
//
//
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    //generate date like this : 2020-01-01
    let date = new Date();
    let dateCreation = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    console.log(dateCreation);

    // Create a User
    const nUser = new user({
        nomUtilisateur: req.body.nomUtilisateur,
        photoProfil: req.body.photoProfil,
        dateCreation: dateCreation,
        email: req.body.email
    });

    //verification de l'unicité de l'email de l'utilisateur dans la base de données si l'email est déjà utilisé, on renvoie une erreur et on ne crée pas l'utilisateur
    user.checkEmail(req.body.email, (err, email) => {
        if (err) {
            // Save User in the database
            user.create(nUser, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || 'Some error occurred while creating the User.'
                    });
                else res.send(data);
            });

            //Envoi d'un mail de confirmation
            let mailOptions = {
                from: 'wavechathelp@gmail.com',
                to: req.body.email,
                subject: 'Bienvenue sur WaveChat',
                text: 'Bienvenue sur WaveChat ' + req.body.nomUtilisateur + '! Vous pouvez dès à présent vous connecter à l\'application, et commencer à chatter avec vos amis !',
                html: "<h1>Bienvenue sur WaveChat " + req.body.nomUtilisateur + " !</h1><h4> Vous pouvez dès à présent vous connecter à l\'application, et commencer à chatter avec vos amis !</h4>"
            };

            nodemailer.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        } else {
            res.status(500).send({
                message: 'Email already used'
            });
        }
    });
};


//Permet de récupérer tous les utilisateurs de la base de données
//route : /app/user (GET)
//
//
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



//Permet de récupérer un utilisateur de la base de données en fonction de son tag
//route : /app/user/:tagUtilisateur (GET)
//
//
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



//Permet de mettre à jour un utilisateur de la base de données en fonction de son tag
//route : /app/user/:tagUtilisateur (PUT)
//
//
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



// Permet de supprimer un utilisateur de la base de données en fonction de son tag
//route : /app/user/:tagUtilisateur (DELETE)
//
//
exports.deleteOne = (req, res) => {
    user.removeById(req.params.tagUtilisateur, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found User with id ${req.params.tagUtilisateur}.`
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete User with id ' + req.params.tagUtilisateur
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};
