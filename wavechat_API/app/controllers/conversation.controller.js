const conversation = require('../models/conversation.model.js');
const utilisateur = require('../models/user.model.js');
const message = require('../models/message.model.js');
//Permet de créer une conversation avec deux utilisateurs dans la base de données
//route : /app/conversation/user/:tagUtilisateur1/:tagUtilisateur2 (POST)
//
exports.createGroupeConversation = (req, res) => {

        // Validation de la requête
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            });
        }
        if (req.body.nomsUtilisateur.length < 2) {
            res.status(400).send({
                message: 'Il faut au moins deux utilisateurs pour créer une conversation.'
            });
        }
    // Création de la conversation
    async function createConv(tabNomUtilisateur) {
        let tabTagUtilisateur = [];
        for (let i = 0; i < tabNomUtilisateur.length; i++) {
            await utilisateur.findByNomUtilisateur(tabNomUtilisateur[i], (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Utilisateur non trouvé avec le nom d'utilisateur ${tabNomUtilisateur[i]}.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Erreur lors de la récupération de l'utilisateur avec le nom d'utilisateur " + tabNomUtilisateur[i]
                        });
                    }
                }
                else {
                    tabTagUtilisateur.push(data.tagUtilisateur);
                }
            });
        }
    //
    const nConversation = new conversation({
        nomConversation: req.body.nomConversation,
        descConv: req.body.descConv,
        urlImage: req.body.urlImage
    });

    // Save Conversation in the database
    await conversation.createWithUsers(nConversation, tabTagUtilisateur, function (err, data) {
        if (err)
            res.status(500).send({
                message: err.message || 'Une erreur est survenue lors de la création de la conversation.'
            });
        else {
            const nMessage = new message({
                contenuMessage: "",
                dateMessage: new Date().toISOString().slice(0, 10),
                heureMessage: new Date().toISOString().slice(11, 19),
                idConversation: data.id,
                tagUtilisateur: 12
            });

            message.createByConvByUser(nMessage, data.id, 12, (err, data) => {});
            res.send(data);
        }
    });
 }
    createConv(req.body.nomsUtilisateur);
}




//Permet de récupérer toutes les conversations de la base de données
//route : /app/conversation (GET)
//
exports.get = (req, res) => {
    conversation.getAllConversation((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Une erreur est survenue lors de la récupération des conversations.'
            });
        else res.send(data);
    });
}



//Permet de récupérer toutes les conversations d'un utilisateur de la base de données
//route : /app/conversation/conv/user/:tagUtilisateur (GET)
//
exports.getByUser = (req, res) => {
    conversation.getByUser(req.params.tagUtilisateur, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Une erreur est survenue lors de la récupération des conversations.'
            });
        else res.send(data);
    });
}



//Permet de récupérer une conversation de la base de données en fonction de son id
//route : /app/conversation/conv/:idConversation (GET)
//
exports.getConvById = (req, res) => {
    conversation.getById(req.params.idConversation, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Une erreur est survenue lors de la récupération de la conversation.'
            });
        else res.send(data);
    });
}


//Permet de mofiier une conversation de la base de données en fonction de son id
//route : /app/conversation/conv/:idConversation (PUT)
//
exports.updateConv = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    conversation.updateById(
        req.params.idConversation,
        new conversation(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Not found Conversation with id ${req.params.idConversation}.`
                    });
                } else {
                    res.status(500).send({
                        message: 'Error updating Conversation with id ' + req.params.idConversation
                    });
                }
            } else res.send(data);
        }
    );
}


//Permet de supprimer une conversation de la base de données en fonction de son id
//route : /app/conversation/conv/:idConversation (DELETE)
//
exports.deleteConv = (req, res) => {
    conversation.remove(req.params.idConversation, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Conversation with id ${req.params.idConversation}.`
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete Conversation with id ' + req.params.idConversation
                });
            }
        } else res.send({ message: `Conversation was deleted successfully!` });
    });
}

//Permet d'ajouter un utilisateur à une conversation
//route : /app/conversation/conv/:idConversation (POST)
//
exports.addUserToConv = (req, res) => {
    //traitement pour trouver les utilisateurs et avoir leur id
    utilisateur.findByNomUtilisateur(req.body.nomUtilisateur, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'l\'utilisateur : ' + req.body.nomUtilisateur + ' n\'existe pas.'
            });
        }
        else {
            conversation.addUser(req.params.idConversation, data.tagUtilisateur, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || 'Une erreur est survenue lors de l\'ajout de l\'utilisateur.'
                    });
                else res.send(data);
            });
        }
    });
}

exports.removeUserFromConv = (req, res) => {
    //traitement pour trouver les utilisateurs et avoir leur id
    utilisateur.findByNomUtilisateur(req.body.nomUtilisateur, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'l\'utilisateur : ' + req.body.nomUtilisateur + ' n\'existe pas.'
            });
        }
        else {
            conversation.removeUser(req.params.idConversation, data.tagUtilisateur, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || 'Une erreur est survenue lors de la suppression de l\'utilisateur.'
                    });
                else res.send(data);
            });
        }
    });
}
