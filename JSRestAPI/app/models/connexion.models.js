const sql = require("./db.js");

const connexion = function(connexion) {
    numCheck = connexion.numCheck;
}

connexion.createNumcheck = (email, numCheck, result) => {
    sql.query("UPDATE Utilisateur SET numCheck = ? WHERE email = ?", [numCheck, email], (err, res) => {
        if (err) {
            console.log("Erreur lors de la création de numCheck : ", err);
            result(err, null);
          } else {
            console.log("NumCheck créé avec succès : ", { email: email, numCheck: numCheck });
            result(null, { email: email, numCheck: numCheck });
            }
    });    
}

connexion.getNumCheck = (email, result) => {
    sql.query("SELECT numCheck, tagUtilisateur FROM Utilisateur WHERE email = ?", email, (err, res) => {
        if (err) {
            console.log("Erreur lors de la récupération de numCheck : ", err);
            result(err, null);
            } else {
                if (res.length) {
                    console.log("NumCheck récupéré avec succès : ", res);
                    result(null, res[0]);
                }
            }
    });
}




module.exports = connexion;

