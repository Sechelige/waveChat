const conversation = require('../models/conversation.model.js');

//Permet de créer une conversation avec deux utilisateurs dans la base de données
//route : /app/conversation/user/:tagUtilisateur1/:tagUtilisateur2 (POST)
//
exports.createWithUser = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    // Create a Conversation
    const nConversation = new conversation({
        nomConversation: req.body.nomConversation,
        descConv: req.body.descConv,
        urlImage: req.body.urlImage
    });

    // Save Conversation in the database
    conversation.createWithUser(nConversation, req.params.tagUtilisateur1, req.params.tagUtilisateur2, function (err, data) {
            if (err)
                res.status(500).send({
                    message: err.message || 'Une erreur est survenue lors de la création de la conversation.'
                });
            else
                res.send(data);
        });
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


