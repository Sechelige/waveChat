document.body.innerHTML = "";

const containerLeftbar = document.createElement("div");
containerLeftbar.setAttribute("id", "containerLeftbar");

const containerTop = document.createElement("div");
containerTop.setAttribute("id", "containerTop");

const account = document.createElement("div");
account.setAttribute("id", "account");
// when the user clicks on the account icon, the user is redirected to the account page
account.addEventListener("click", function () {
     let script = document.createElement("script");
     script.src = "scripts/displayProfile.js";
     document.head.appendChild(script);
});

const accountLink = document.createElement("a");
accountLink.setAttribute("href", "#");

const accountImage = document.createElement("img");
accountImage.setAttribute("class", "topbarImages");
accountImage.setAttribute("src", "images/groupChat.png");
accountImage.setAttribute("alt", "A description of the image");
accountImage.addEventListener("click", function () {});
accountLink.appendChild(accountImage);
account.appendChild(accountLink);
containerTop.appendChild(account);

// p to display username of the current user logged in
const usernameStatus = document.createElement("p");
usernameStatus.setAttribute("id", "usernameStatus");
fetch(`${apiRootAddress}/app/user/${userId}`)
            .then(response => response.json())
            .then(data => {
                usernameStatus.innerText = data.nomUtilisateur;
            })
            .catch(error => console.log("Error fetching user:", error));
containerTop.appendChild(usernameStatus);

const newMessage = document.createElement("div");
newMessage.setAttribute("id", "newMessage");

const newMessageLink = document.createElement("a");
newMessageLink.setAttribute("href", "#");

const newMessageImage = document.createElement("img");
newMessageImage.setAttribute("class", "topbarImages");
newMessageImage.setAttribute("src", "images/new-message.png");
newMessageImage.setAttribute("alt", "A description of the image");
newMessageLink.appendChild(newMessageImage);
newMessage.appendChild(newMessageLink);
containerTop.appendChild(newMessage);
containerLeftbar.appendChild(containerTop);
newMessage.addEventListener("click", function () {
     let script = document.createElement("script");
     script.src = "scripts/displayCreateConv.js";
     document.head.appendChild(script);
     let myDivs = document.getElementsByClassName("containerChat");
     for (let j = 0; j < myDivs.length; j++) {
          myDivs[j].classList.remove("selected");
     }
});

const containerChats = document.createElement("div");
containerChats.setAttribute("id", "containerChats");

const scriptChats = document.createElement("script");
scriptChats.setAttribute("src", "scripts/loadChats.js");
containerChats.appendChild(scriptChats);
containerLeftbar.appendChild(containerChats);

const containerDiscussion = document.createElement("div");
containerDiscussion.setAttribute("id", "containerDiscussion");
containerDiscussion.setAttribute("data-convId", "null");

const textNoChatSelected = document.createElement("p");
textNoChatSelected.setAttribute("id", "textNoChatSelected");
textNoChatSelected.innerText =
     "Cliquez sur une conversation pour commencer à discuter";
containerDiscussion.appendChild(textNoChatSelected);

const scriptContainerMessages = document.createElement("script");
scriptContainerMessages.setAttribute(
     "src",
     "scripts/containerMessagesScrolledDown.js"
);
containerDiscussion.appendChild(scriptContainerMessages);
document.body.appendChild(containerDiscussion);

const containerMessenger = document.createElement("div");
containerMessenger.setAttribute("id", "containerMessenger");
containerMessenger.style.display = "none";

const messenger = document.createElement("div");
messenger.setAttribute("id", "messenger");
containerMessenger.appendChild(messenger);

const inputMessenger = document.createElement("input");
inputMessenger.setAttribute("type", "text");
inputMessenger.setAttribute("id", "inputMessenger");
inputMessenger.setAttribute("placeholder", "Type your message here...");
containerMessenger.appendChild(inputMessenger);

const scriptSendMessage = document.createElement("script");
scriptSendMessage.setAttribute("src", "scripts/sendMessage.js");
containerMessenger.appendChild(scriptSendMessage);
document.body.appendChild(containerMessenger);
document.body.appendChild(containerLeftbar);

// when a chat is selected, the messages are refreshed every 2 seconds
// setInterval(function () {