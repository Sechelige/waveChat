const connexion = require("../models/connexion.models.js");
const user = require("../models/user.model.js");
const nodemailer = require("../models/nodemailer.js");

//Permet de créer un code de vérification et de l'envoyer par mail à l'utilisateur
//route : /app/connexion/numcheck/:email (POST)
//

exports.createNumcheck = (req, res) => {

    numCheck = Math.floor(Math.random() * 900000) + 100000;

    connexion.createNumcheck(req.params.email, numCheck, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the connexion."
            });
        }
        else res.send(data);
    });

    console.log("Email de l'utilisateur : ", req.params.email);
    //send numCheck to the user's email
    var mailOptions = {
        from: 'wavechathelp@gmail.com',
        to: req.params.email,
        subject: 'WaveChat - Connection à votre compte',
        text: 'Voici votre code de vérification : ' + numCheck,
        html: "<h2>Voici votre code de vérification : </h2><h3> " + numCheck + "</h3></br></br></br><p>Cordialement l'équipe WaveChat.</p>"
    };

    nodemailer.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

exports.okNumcheck = (req, res) => {
    connexion.getNumCheck(req.params.email, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the connexion."
            });
        }
        else {
            var numCheckUser = req.body.numCheck;
            var numCheckDB = data.numCheck;
            var tagUtilisateur = data.tagUtilisateur;
            if (numCheckUser == numCheckDB) {
                res.status(500).send({ tagUtilisateur: tagUtilisateur, test: true });
            }
            else {
                res.send(tagUtilisateur, false);
            }
        }
    });
};
