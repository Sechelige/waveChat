const sql = require("./db.js");

const connexion = function(connexion) {
    numCheck = connexion.numCheck;
}

connexion.createNumcheck = (tagUtilisateur, numCheck, result) => {
    sql.query("UPDATE Utilisateur SET numCheck = ? WHERE tagUtilisateur = ?", [numCheck, tagUtilisateur], (err, res) => {
        if (err) {
            console.log("Erreur lors de la création de numCheck : ", err);
            result(err, null);
          } else {
            console.log("NumCheck créé avec succès : ", { tagUtilisateur: tagUtilisateur, numCheck: numCheck });
            result(null, { tagUtilisateur: tagUtilisateur, numCheck: numCheck });
            }
    });    
}

connexion.getNumCheck = (email, result) => {
    sql.query("SELECT numCheck FROM Utilisateur WHERE email = ?", email, (err, res) => {
        if (err) {
            console.log("Erreur lors de la récupération de numCheck : ", err);
            result(err, null);
            } else {
                if (res.length) {
                    console.log("NumCheck récupéré avec succès : ", res[0]);
                    result(null, res[0].numCheck);
                } else {
                    result({ kind: "not_found" }, null);
                }
            }
    });
}




module.exports = connexion;

