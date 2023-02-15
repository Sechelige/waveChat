const sql = require("./db.js");

// constructor
const conversation = function(conversation) {
    this.idConversation = conversation.idConversation;
    this.nomConversation = conversation.nomConversation;
    this.descConv = conversation.descConv;
    this.urlImage = conversation.urlImage;
};

conversation.create = (newConversation, result) => {
    sql.query("INSERT INTO Conversation SET ?", newConversation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created conversation: ", { id: res.insertId, ...newConversation });
        result(null, { id: res.insertId, ...newConversation });
    });
}

conversation.getAll = result => {
    sql.query("SELECT * FROM Conversation", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("conversations: ", res);
        result(null, res);
    });
}
/*
conversation.findUserTags = (idConversation, result) => {
    sql.query(`SELECT tagUtilisateur FROM Utilisateur_Conversation WHERE idConversation = ${idConversation}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user tags: ", res);
            result(null, res);
            return;
        }
    });
}*/
