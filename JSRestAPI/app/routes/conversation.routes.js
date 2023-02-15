module.exports = app => {
    const conversation = require('../controllers/conversation.controller.js');

    var router = require('express').Router();

    // Create a new Conversation
    router.post('/', conversation.create);

    // Retrieve all Conversations
    router.get('/', conversation.getll);

    // Retrieve a single Conversation with tagUtilisateur
    router.get('/:tagUtilisateur', conversation.findOne);

    app.use('/app/conversation', router);

};