const connexion = require("../models/connexion.models.js");
const user = require("../models/user.model.js");
const nodemailer = require("../models/nodemailer.js");

exports.createNumcheck = (req, res) => {

    numCheck = Math.floor(Math.random() * 900000) + 100000;

    connexion.createNumcheck(+req.params.tagUtilisateur, numCheck, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the connexion."
            });
        }
        else res.send(data);
    });

    user.getEmailByUser(+req.params.tagUtilisateur, (err, email) => {
        if (err) {
            console.log("Erreur lors de la récupération de l'email : ", err);
            return err;
        } else {
            console.log("Email de l'utilisateur : ", email);
            //send numCheck to the user's email
            var mailOptions = {
                from: 'wavechathelp@gmail.com',
                to: email,
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
        }
    });
};

exports.okNumcheck = (req, res) => {
    connexion.getNumCheck(req.params.email, (err, numCheck) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the connexion."
            });
        }
        else {
            var numCheckUser = req.body.numCheck;
            if (numCheckUser == numCheck) {
                res.send(true);
            } else {
                res.send(false);
            }
        }
    }
    );
};

