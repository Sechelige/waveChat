module.exports = app => {
    const user = require('../controllers/user.controller.js');
  
    var router = require('express').Router();

    // Permet de créer un utilisateur dans la base de données
    router.post('/', user.create);

    // Permet de récupérer tous les utilisateurs de la base de données
    router.get('/', user.findAll);

    // Permet de récupérer un utilisateur de la base de données en fonction de son email
    router.get('/email/:email', user.getUserByEmail);

    // Permet de récupérer un utilisateur de la base de données en fonction de son tag
    router.get('/:tagUtilisateur', user.findOne);

    // Permet de mettre à jour un utilisateur de la base de données en fonction de son tag
    router.put('/:tagUtilisateur', user.update);

    // Permet de supprimer un utilisateur de la base de données en fonction de son tag
    router.delete('/:tagUtilisateur', user.deleteOne);

    app.use('/app/user', router);
};