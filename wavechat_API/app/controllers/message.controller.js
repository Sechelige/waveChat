const message = require("../models/message.model.js");

// Permet de créer un message dans la base de données avec idConversation et tagUtilisateur
// route : /app/message/conv/:idConversation/user/:tagUtilisateur (POST)
//
exports.createMsg = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Message
    const nMessage = new message({
        contenuMessage: req.body.contenuMessage,
        dateMessage: req.body.dateMessage,
        heureMessage: req.body.heureMessage
    });

    // Save Message in the database
    message.createByConvByUser(nMessage, req.params.idConversation, req.params.tagUtilisateur, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Message."
            });
        else res.send(data);
    });
}


// Permet de récupérer tous les messages d'une conversation de la base de données
// route : /app/message/conv/:idConversation (GET)
//
exports.getMsgByConv = (req, res) => {
    message.getAllByConv(req.params.idConversation, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving messages."
            });
        else res.send(data);
    });
}


// Permet de supprimer un message de la base de données selon son id
// route : /app/message/msg/:idMessage (DELETE)
//
exports.deleteMsgById = (req, res) => {
    message.deleteById(req.params.idMessage, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Message with id ${req.params.idMessage}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Message with id " + req.params.idMessage
                });
            }
        } else res.send({ message: `Message was deleted successfully!` });
    });
}


