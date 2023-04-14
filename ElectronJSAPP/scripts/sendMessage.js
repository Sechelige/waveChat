var inputElement = document.getElementById("inputMessenger");

inputElement.addEventListener("keyup", function (event) {
     if (event.key === "Enter") { // quand entrée dans la barre d'input
          let inputText = inputElement.value;
          let idConv = containerDiscussion.getAttribute("data-convId");
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
               ///

               fetch(
                    `${apiRootAddress}/app/message/conv/${idConv}/user/${userId}`,
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
                         fetch(
                              `${apiRootAddress}/app/message/conv/${idConv}`
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
     }
});
