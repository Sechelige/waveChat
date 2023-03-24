const sql = require('./db.js');
 
// constructor
const User = function(user) {
    this.tagUtilisateur = user.tagUtilisateur;
    this.nomUtilisateur = user.nomUtilisateur;
    this.photoProfil = user.photoProfil;
    this.numCheck = user.numCheck;
    this.dateCreation = user.dateCreation;
    this.email = user.email;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO Utilisateur SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
}

User.getAll = result => {
    sql.query("SELECT * FROM Utilisateur", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
}

User.findById = (tagUtilisateur, result) => {
    sql.query(`SELECT * FROM Utilisateur WHERE tagUtilisateur = ${tagUtilisateur}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
    });
}

User.findByNomUtilisateur = (nomUtilisateur, result) => {
    sql.query(`SELECT * FROM Utilisateur WHERE nomUtilisateur = '${nomUtilisateur}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
    });
}


User.updateById = (tagUtilisateur, user, result) => {
    sqlstar = "UPDATE Utilisateur SET"
    sqlend = " WHERE tagUtilisateur = " + tagUtilisateur

    if (user.nomUtilisateur) {
        sqlstar = sqlstar + " nomUtilisateur = '" + user.nomUtilisateur + "',"
    }
    if (user.email) {
        sqlstar = sqlstar + " email = '" + user.email + "',"
    }
    if (user.mdp) {
        sqlstar = sqlstar + " mdp = '" + user.mdp + "',"
    }
    if (user.photoProfil) {
        sqlstar = sqlstar + " photoProfil = '" + user.photoProfil + "',"
    }
    sqlstar = sqlstar.slice(0, -1)
    sqlstar = sqlstar + sqlend + ";"

    console.log(sqlstar)
    sql.query(
        sqlstar,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated user: ", { tagUtilisateur: tagUtilisateur, ...user });
            result(null, { tagUtilisateur: tagUtilisateur, ...user });
        }
    );
}

User.removeById = (tagUtilisateur, result) => {
    sql.query("DELETE FROM Utilisateur WHERE tagUtilisateur = ?", tagUtilisateur, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", tagUtilisateur);
        result(null, res);
    });
}

User.findByEmail = (email, result) => {
    sql.query("SELECT * FROM Utilisateur WHERE email = ?", email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the email
        result({ kind: "not_found" }, null);
    });
}


User.checkEmail = (email, result) => {
    sql.query("SELECT email FROM Utilisateur WHERE email = ?", email, (err, res) => {
        if (err) {
            console.log("Erreur lors de la vérification de l'email : ", err);
            result(err, null);
            } else {
                if (res.length) {
                    console.log("Email déjà utilisé : ", res[0]);
                    result(null, res[0].email);
                } else {
                    result({ kind: "not_found" }, null);
                }
            }
    });
}

module.exports = User;