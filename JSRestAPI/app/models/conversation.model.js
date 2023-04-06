const sql = require("./db.js");

// constructor
const Conversation = function (conversation) {
    this.idConversation = conversation.idConversation;
    this.nomConversation = conversation.nomConversation;
    this.descConv = conversation.descConv;
    this.urlImage = conversation.urlImage;
}

Conversation.createWithUsers = (newConversation, tagUtilisateur, result) => {
    sql.query("INSERT INTO Conversation SET ?", newConversation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        for (let i = 0; i < tagUtilisateur.length; i++) {
            sql.query(`
            INSERT INTO UtilisateursConv (idConversation, tagUtilisateur)
            VALUES ((SELECT idConversation FROM Conversation WHERE idConversation = ${res.insertId}),${tagUtilisateur[i]});
            `, (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }
            });
        }
        console.log("created conversation: ", { id: res.insertId, ...newConversation });
        result(null, { id: res.insertId, ...newConversation, tagUtilisateur: tagUtilisateur });
    });
}

Conversation.getAllConversation = result => {
    sql.query(`
    SELECT *
    FROM Conversation;`
        , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found conversation: ", res);
                result(null, res);
                return;
            }
        });
}

Conversation.getByUser = (tagUtilisateur, result) => {
    sql.query(`
    SELECT conv.idConversation, conv.nomConversation, msg.contenuMessage, u.nomUtilisateur, msg.dateMessage, msg.heureMessage
    FROM utilisateursConv uc
    INNER JOIN Conversation conv ON uc.idConversation = conv.idConversation
    INNER JOIN Message msg ON uc.idConversation = msg.idConversation AND msg.idMessage = 
    (
    SELECT MAX(idMessage)
    FROM Message
    WHERE idConversation = uc.idConversation
    )
    INNER JOIN Utilisateur u ON uc.tagUtilisateur = u.tagUtilisateur
    WHERE u.tagUtilisateur = ${tagUtilisateur}
    ORDER BY msg.dateMessage DESC, msg.heureMessage DESC;
`
        , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found conversation: ", res);
                result(null, res);
                return;
            }
        });
}

Conversation.getById = (idConversation, result) => {
    sql.query(`
    SELECT *
    FROM Conversation
    WHERE idConversation = ${idConversation};`
        , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found conversation: ", res);
                result(null, res);
                return;
            }
        });
}

Conversation.updateById = (idConversation, conversation, result) => {
    sqlprepare = "UPDATE Conversation SET ";
    if (conversation.nomConversation != null) {
        sqlprepare += `nomConversation = '${conversation.nomConversation}',`;
    }
    if (conversation.descConv != null) {
        sqlprepare += `descConv = '${conversation.descConv}',`;
    }
    if (conversation.urlImage != null) {
        sqlprepare += `urlImage = '${conversation.urlImage}',`;
    }
    sqlprepare = sqlprepare.slice(0, -1);
    sqlprepare += ` WHERE idConversation = ${idConversation};`;

    sql.query(sqlprepare, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Conversation with the id
            console.log("not found conversation with id: ", idConversation);
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated conversation: ", { id: idConversation, ...conversation });
        result(null, { id: idConversation, ...conversation });
    });
}



Conversation.remove = (idConversation, result) => {
    sql.query("DELETE FROM Conversation WHERE idConversation = ?", idConversation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Conversation with the id
            console.log("not found conversation with id: ", idConversation);
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted conversation with id: ", idConversation);
        result(null, res);
    });
}

Conversation.getLastMessage = (idConversation, result) => {
    sql.query(`
    SELECT *
    FROM Message
    WHERE idConversation = ${idConversation}
    ORDER BY dateMessage DESC
    LIMIT 1;`
        , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found conversation: ", res);
                result(null, res);
                return;
            }
        });
}

Conversation.addUser = (idConversation, tagUtilisateur, result) => {
    sql.query(`
    INSERT INTO UtilisateursConv (idConversation, tagUtilisateur)
    VALUES (${idConversation},${tagUtilisateur});`
        , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("added user to conversation: ", { id: idConversation, ...tagUtilisateur });
            result(null, { id: idConversation, ...tagUtilisateur });
        });
}

Conversation.removeUser = (idConversation, tagUtilisateur, result) => {
    sql.query(`
    DELETE FROM UtilisateursConv
    WHERE idConversation = ${idConversation} AND tagUtilisateur = ${tagUtilisateur};`
        , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("removed user from conversation: ", { id: idConversation, ...tagUtilisateur });
            result(null, { id: idConversation, ...tagUtilisateur });
        });
}


module.exports = Conversation;
