var inputElement = document.getElementById("inputMessenger"); // Définition de l'élément d'input
var idConv = 1; // id de la conversation
var idUser = 1; // id du user

inputElement.addEventListener("keyup", function (event) {
     if (event.key === "Enter") { // quand entrée dans la barre d'input
          let inputText = inputElement.value;

          if (inputText.length > 0) { // si non vide
               let currentDate = new Date().toISOString().substr(0, 10);
               let currentTime = new Date().toLocaleTimeString("en-US", {
                    hour12: false,
               });

               let messageToBeSent = {
                    contenuMessage: inputText,
                    dateMessage: currentDate,
                    heureMessage: currentTime,
               };
               // Affichage local pour réduire latence visuelle
               containerDiscussion.innerHTML += `<div class="messageBox">
                                                <img class="profilePictureMessage" src="images/groupChat.png">
                                                <div class="textMessage">
                                                <p class="usernameChat">Vous</p>
                                                <p class="messageContent">${inputText}</p>
                                                </div>
                                                </div>`
               ///
               
               fetch(
                    `http://wavechatapi.ddns.net:6500/app/message/conv/${idConv}/user/${idUser}`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify(messageToBeSent),
                    }
               )
                    .then((response) => response.json())
                    .then((data) => {
                         const convId = 1;
                         fetch(
                              `http://wavechatapi.ddns.net:6500/app/message/conv/${convId}`
                         )
                              .then((response) => response.json())
                              .then((data) => {
                                   let messages = "";
                                   for (let i = 0; i < data.length; i++) {
                                        messages += `<div class="messageBox">
                                                        <img class="profilePictureMessage" src="images/groupChat.png">
                                                        <div class="textMessage">
                                                        <p class="usernameChat">${data[i].nomUtilisateur}</p>
                                                        <p class="messageContent">${data[i].contenuMessage}</p>
                                                        </div>
                                                    </div>`;
                                   }
                                   containerDiscussion.innerHTML = messages;

                                   let objDiv = document.getElementById(
                                        "containerDiscussion"
                                   );
                                   objDiv.scrollTop = objDiv.scrollHeight;

                                   // Execute code after fetch is finished
                                   console.log("Fetch finished.");
                              })
                              .catch((error) => console.error(error));
                    });

               document.getElementById("inputMessenger").value = "";
          }
          const scrollToBottom = require("./containerMessagesScrolledDown");
          scrollToBottom();
     }
});
