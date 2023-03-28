console.log(
     `loadChats loaded\n ${apiRootAddress}/app/conversation/conv/user/${userId}`
);
fetch(`${apiRootAddress}/app/conversation/conv/user/${userId}`)
     .then((response) => response.json())
     .then((data) => {
          console.log(
               `Fetch to route ${apiRootAddress}/app/conversation/conv/user/${userId}\n${data}`
          );
          if (data.length > 0) {

               data.forEach((chat) => {
                    const containerChat = document.createElement("div");
                    containerChat.setAttribute(
                         "data-convId",
                         chat.idConversation
                    );
                    // containerChat.setAttribute("data-isSelected", "false");
                    containerChat.classList.add("containerChat");

                    const groupChatImage = document.createElement("img");
                    groupChatImage.classList.add("groupChatImage");
                    groupChatImage.src = "images/groupChat.png";
                    groupChatImage.alt = "A description of the image";

                    const groupChatText = document.createElement("div");
                    groupChatText.classList.add("groupChatText");

                    const groupName = document.createElement("p");
                    groupName.classList.add("groupName");
                    groupName.textContent = chat.nomConversation;

                    const lastMessage = document.createElement("p");
                    lastMessage.classList.add("lastMessage");
                    lastMessage.textContent = "Dernier message";

                    groupChatText.appendChild(groupName);
                    groupChatText.appendChild(lastMessage);

                    containerChat.appendChild(groupChatImage);
                    containerChat.appendChild(groupChatText);

                    containerChats.appendChild(containerChat);
               });

               const myDivs = document.getElementsByClassName("containerChat");
               for (let i = 0; i < myDivs.length; i++) {
                    myDivs[i].addEventListener("click", function () {
                         // Remove background color from all divs
                         containerMessenger.style.display = "flex";
                         for (let j = 0; j < myDivs.length; j++) {
                              myDivs[j].classList.remove("selected");
                         }
                         // Add selected class to clicked div
                         this.classList.add("selected");
                         let convId = this.getAttribute("data-convId");
                         console.log("Clic sur conversation N°" + convId);
                         containerDiscussion.innerHTML = "";
                         const loadGif = document.createElement("img");
                         loadGif.setAttribute("class", "loadingGif");
                         loadGif.setAttribute("src", "images/loading.gif");
                         containerDiscussion.setAttribute(
                              "data-convId",
                              convId
                         );
                         containerDiscussion.appendChild(loadGif);
                         loadMessagesClick(convId);
                    });
               }
          } else {
               containerChats.innerHTML = "";
          }
     });

function loadMessagesClick(convId) {
     fetch(`${apiRootAddress}/app/message/conv/${convId}`)
          .then((response) => response.json())
          .then((data) => {
               console.log(data)
               if (data.length > 0) {
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

                    let objDiv = document.getElementById("containerDiscussion");
                    objDiv.scrollTop = objDiv.scrollHeight;

                    // Execute code after fetch is finished
                    console.log("Fetch finished.");
               } else {
                    containerDiscussion.innerHTML = "";
               }
          })
          .catch((error) => console.error(error));
}
