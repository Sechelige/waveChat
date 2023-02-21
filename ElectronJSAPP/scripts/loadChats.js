let userId = 1;

fetch(`http://wavechatapi.ddns.net:6500/app/conversation/conv/user/${userId}`)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      containerChats.innerHTML += `
        <div data-convId="${i}"class="containerChat">  
          <img class="groupChatImage" src="images/groupChat.png" alt="A description of the image">
          <div class="groupChatText"> 
            <p class="groupName">${i} ${data[i].nomConversation}</p>  
            <p class="lastMessage">Dernier message</p>  
          </div> 
        </div>`;
    }
    const myDivs = document.getElementsByClassName("containerChat");
    for (let i = 0; i < myDivs.length; i++) {
      myDivs[i].addEventListener("click", function () {
        // Remove background color from all divs
        for (let j = 0; j < myDivs.length; j++) {
          myDivs[j].classList.remove("selected");
        }
        // Add selected class to clicked div
        this.classList.add("selected");
      });
    }
  });
