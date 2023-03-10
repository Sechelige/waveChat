const sql = require("./db.js");

// constructor
const Conversation = function(conversation) {
    this.idConversation = conversation.idConversation;
    this.nomConversation = conversation.nomConversation;
    this.descConv = conversation.descConv;
    this.urlImage = conversation.urlImage;
}

Conversation.createWithUser = (newConversation, tagUtilisateur1, tagUtilisateur2, result) => {
    sql.query("INSERT INTO Conversation SET ?", newConversation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

    sql.query(`
    INSERT INTO UtilisateursConv (idConversation, tagUtilisateur)
    VALUES ((SELECT idConversation FROM Conversation WHERE idConversation = ${res.insertId}),${tagUtilisateur1}),
    ((SELECT idConversation FROM Conversation WHERE idConversation = ${res.insertId}),${tagUtilisateur2});`
    , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    });
        console.log("created conversation: ", { id: res.insertId, ...newConversation });
        result(null, { id: res.insertId, ...newConversation });
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
    SELECT Conversation.idConversation, Conversation.nomConversation
    FROM Conversation
    INNER JOIN UtilisateursConv
    ON Conversation.idConversation = UtilisateursConv.idConversation
    WHERE UtilisateursConv.tagUtilisateur = ${tagUtilisateur};`
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



module.exports = Conversation;
