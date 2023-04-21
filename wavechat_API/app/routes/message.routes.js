module.exports = app => {
    const message = require('../controllers/message.controller.js');
 
    var router = require('express').Router();
 
    // Permet de créer un message dans la base de données
    router.post('/conv/:idConversation/user/:tagUtilisateur', message.createMsg);

    // Permet de récupérer tous les messages d'une conversation de la base de données
    router.get('/conv/:idConversation', message.getMsgByConv);

    // Permet de supprimer un message de la base de données selon son id
    router.delete('/msg/:idMessage', message.deleteMsgById);
 
    app.use('/app/message', router);
}; 