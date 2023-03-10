module.exports = app => {
    const connexion = require("../controllers/connexion.controller.js");

    var router = require("express").Router();

    router.put("/okcon/:email", connexion.okNumcheck);

    router.get("/askcon/:tagUtilisateur", connexion.createNumcheck);

    app.use("/app/connexion", router);
};

