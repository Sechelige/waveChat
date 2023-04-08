var firstClick = false;
fetch(`${apiRootAddress}/app/conversation/conv/user/${userId}`)
     .then((response) => response.json())
     .then((data) => {
          data.forEach((chat) => {
               // convert to string
               var contenuMessage = chat.contenuMessage.toString();
               // if the message is too long, cut it
               if (contenuMessage.length > 15) {
                    contenuMessage = contenuMessage.substring(0, 15) + "...";
               }

               const date = new Date(chat.dateMessage);
               const options = { year: "numeric", month: "long", day: "numeric" };
               chat.dateMessage = date.toLocaleDateString("fr-FR", options);
               

               const containerChat = document.createElement("div");
               containerChat.setAttribute("data-convId", chat.idConversation);
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
               lastMessage.textContent = `${chat.nomUtilisateur} : ${contenuMessage}`;

               const dateMessage = document.createElement("p");
               dateMessage.classList.add("dateMessage");
               dateMessage.textContent = chat.dateMessage;

               const timeMessage = document.createElement("p");
               timeMessage.classList.add("timeMessage");
               timeMessage.textContent = chat.heureMessage;

               groupChatText.appendChild(groupName);
               groupChatText.appendChild(lastMessage);
               groupChatText.appendChild(dateMessage);
               groupChatText.appendChild(timeMessage);


               containerChat.appendChild(groupChatImage);
               containerChat.appendChild(groupChatText);

               containerChats.appendChild(containerChat);
          });

          const myDivs = document.getElementsByClassName("containerChat");
          for (let i = 0; i < myDivs.length; i++) {
               myDivs[i].addEventListener("click", function () {
                    // var to test if the div is clicked and scrolled down
                    firstClick = false;
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
                    containerDiscussion.setAttribute("data-convId", convId);
                    containerDiscussion.appendChild(loadGif);
                    setInterval(() => {
                         loadMessagesClick(
                              containerDiscussion.getAttribute("data-convId")
                         );
                    }, 500);
               });
          }
     });

function loadMessagesClick(convId) {
     fetch(`${apiRootAddress}/app/message/conv/${convId}`)
          .then((response) => response.json())
          .then((data) => {
               console.log(data);
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

               // Execute code after fetch is finished
               console.log("Fetch finished.");
               if (!firstClick) {
                    let objDiv = document.getElementById("containerDiscussion");
                    objDiv.scrollTop = objDiv.scrollHeight;
                    firstClick = true;
               }
          });
}
