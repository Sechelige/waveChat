module.exports = app => {
    const conversation = require('../controllers/conversation.controller.js');

    var router = require('express').Router();

    // Permet de créer une conversation entre deux utilisateurs dans la base de données
    //router.post('/user/:tagUtilisateur1/:tagUtilisateur2', conversation.createWithUser);

    router.post('/user', conversation.createGroupeConversation);

    // Permet de récupérer toutes les conversations de la base de données
    router.get('/', conversation.get);

    // Permet de récupérer toutes les conversations de la base de données selon un tag utilisateur
    router.get('/conv/user/:tagUtilisateur', conversation.getByUser);

    // Permet de récupérer une conversation de la base de données selon son id
    router.get('/conv/:idConversation', conversation.getConvById);

    // Permet de mofiier une conversation de la base de données selon son id
    router.put('/conv/:idConversation', conversation.updateConv);

    // Permet de supprimer une conversation de la base de données selon son id
    router.delete('/conv/:idConversation', conversation.deleteConv);

    // Permet d'ajouter un utilisateur à une conversation
    router.post('/conv/:idConversation/user/:tagUtilisateur', conversation.addUser);
    
    app.use('/app/conversation', router);
};