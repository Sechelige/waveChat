document.body.innerHTML = "";

const containerLeftbar = document.createElement('div');
containerLeftbar.setAttribute('id', 'containerLeftbar');

const containerTop = document.createElement('div');
containerTop.setAttribute('id', 'containerTop');

const account = document.createElement('div');
account.setAttribute('id', 'account');

const accountLink = document.createElement('a');
accountLink.setAttribute('href', '#');

const accountImage = document.createElement('img');
accountImage.setAttribute('class', 'topbarImages');
accountImage.setAttribute('src', 'images/groupChat.png');
accountImage.setAttribute('alt', 'A description of the image');
accountImage.addEventListener('click', function(){
    
})
accountLink.appendChild(accountImage);
account.appendChild(accountLink);
containerTop.appendChild(account);

const searchForm = document.createElement('form');
searchForm.setAttribute('id', 'searchForm');

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('id', 'searchInput');
searchInput.setAttribute('placeholder', 'Search...');
searchForm.appendChild(searchInput);
containerTop.appendChild(searchForm);

const newMessage = document.createElement('div');
newMessage.setAttribute('id', 'newMessage');

const newMessageLink = document.createElement('a');
newMessageLink.setAttribute('href', '#');

const newMessageImage = document.createElement('img');
newMessageImage.setAttribute('class', 'topbarImages');
newMessageImage.setAttribute('src', 'images/new-message.png');
newMessageImage.setAttribute('alt', 'A description of the image');
newMessageLink.appendChild(newMessageImage);
newMessage.appendChild(newMessageLink);
containerTop.appendChild(newMessage);
containerLeftbar.appendChild(containerTop);
newMessage.addEventListener("click", function () {
    let script = document.createElement("script");
    script.src = "scripts/displayCreateConv.js";
    document.head.appendChild(script);
});

const containerChats = document.createElement('div');
containerChats.setAttribute('id', 'containerChats');

const scriptChats = document.createElement('script');
scriptChats.setAttribute('src', 'scripts/loadChats.js');
containerChats.appendChild(scriptChats);
containerLeftbar.appendChild(containerChats);

const containerDiscussion = document.createElement('div');
containerDiscussion.setAttribute('id', 'containerDiscussion');
containerDiscussion.setAttribute('data-convId', 'null');

const textNoChatSelected = document.createElement('p');
textNoChatSelected.setAttribute('id', 'textNoChatSelected');
textNoChatSelected.innerText = "Cliquez sur une conversation pour commencer à discuter";
containerDiscussion.appendChild(textNoChatSelected);

// const scriptMessages = document.createElement('script');
// scriptMessages.setAttribute('src', 'scripts/loadMessages.js');
// containerDiscussion.appendChild(scriptMessages);

const scriptContainerMessages = document.createElement('script');
scriptContainerMessages.setAttribute('src', 'scripts/containerMessagesScrolledDown.js');
containerDiscussion.appendChild(scriptContainerMessages);
document.body.appendChild(containerDiscussion);

const containerMessenger = document.createElement('div');
containerMessenger.setAttribute('id', 'containerMessenger');

const messenger = document.createElement('div');
messenger.setAttribute('id', 'messenger');
containerMessenger.appendChild(messenger);

const inputMessenger = document.createElement('input');
inputMessenger.setAttribute('type', 'text');
inputMessenger.setAttribute('id', 'inputMessenger');
inputMessenger.setAttribute('placeholder', 'Type your message here...');
containerMessenger.appendChild(inputMessenger);

const scriptSendMessage = document.createElement('script');
scriptSendMessage.setAttribute('src', 'scripts/sendMessage.js');
containerMessenger.appendChild(scriptSendMessage);

const sendMessengerButton = document.createElement('button');
sendMessengerButton.setAttribute('id', 'sendMessenger');
sendMessengerButton.textContent = 'Send';
containerMessenger.appendChild(sendMessengerButton);
document.body.appendChild(containerMessenger);
document.body.appendChild(containerLeftbar);