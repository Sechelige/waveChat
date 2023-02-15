const conversation = require('../controllers/conversation.controller.js');

exports.create = (req, res) => {
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
    conversation.create(nConversation, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the Conversation.'
            });
        else res.send(data);
    });
}