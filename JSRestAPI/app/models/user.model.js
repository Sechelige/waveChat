const sql = require('./db.js');

// constructor
const User = function(user) {
    this.tagUtilisateur = user.tagUtilisateur;
    this.nomUtilisateur = user.nomUtilisateur;
    this.photoProfil = user.photoProfil;
    this.mdp = user.mdp;
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

User.updateById = (tagUtilisateur, user, result) => {
    sql.query(
        "UPDATE Utilisateur SET nomUtilisateur = ?, email = ?, mdp = ?, photoProfil WHERE tagUtilisateur = ?",
        [user.nomUtilisateur,  user.email, user.mdp, user.photoProfil, tagUtilisateur],
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

            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
}
/*
User.remove = (id, result) => {
    sql.query("DELETE FROM Userapp WHERE idUtilisateur = ?", id, (err, res) => {
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

        console.log("deleted user with id: ", id);
        result(null, res);
    });
}*/

module.exports = User;