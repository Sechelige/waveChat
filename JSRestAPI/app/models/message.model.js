const sql = require("./db.js");

// constructor
const message = function(message) {
    this.idMessage = message.idMessage;
    this.contenuMessage = message.contenuMessage;
    this.dateMessage = message.dateMessage;
    this.heureMessage = message.heureMessage;
}

message.createByConvByUser = (newMessage, idConversation, tagUtilisateur, result) => {
    sql.query(`INSERT INTO Message SET idConversation = ${idConversation}, tagUtilisateur = ${tagUtilisateur}, ?`, newMessage, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created message: ", { id: res.insertId, ...newMessage });
        result(null, { id: res.insertId, ...newMessage });
    });
}

message.getAllByConv = (idConversation, result) => {
    sql.query(`
    SELECT Utilisateur.nomUtilisateur, Utilisateur.PhotoProfil, Message.idMessage, Message.contenuMessage, Message.dateMessage, Message.heureMessage
    FROM Message
    INNER JOIN Utilisateur
    ON Message.tagUtilisateur = Utilisateur.tagUtilisateur
    WHERE Message.idConversation = ${idConversation}
    ORDER BY Message.idMessage ASC
    ;`
    , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found message: ", res);
            result(null, res);
            return;
        }
    });
}


message.deleteById = (idMessage, result) => {
    sql.query(`
    DELETE FROM Message
    WHERE idMessage = ${idMessage}
    ;`
    , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // not found message with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted message with id: ", idMessage);
        result(null, res);
    });
}

module.exports = message;

