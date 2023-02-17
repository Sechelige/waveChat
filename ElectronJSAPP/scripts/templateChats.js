// Create the HTML elements and apply the event listeners
fetch("http://wavechatapi.ddns.net:6500/app/user")
     .then((response) => response.json())
     .then((data) => {
          containerChats = document.getElementById("containerChats");
            for (let i = 0; i < data.length; i++) {
                containerChats.innerHTML += `<a href="#"> 
                      <div class="containerChat">  
                        <img class="groupChatImage" src="images/groupChat.png" alt="A description of the image">
                        <div class="groupChatText"> 
                          <p class="groupName">${data[i].nomUtilisateur}</p>  
                          <p class="lastMessage">Dernier message</p>  
                        </div> 
                      </div>
                    </a>`;
            }
          const myDivs = document.getElementsByClassName("containerChat");
          for (let i = 0; i < myDivs.length; i++) {
               myDivs[i].addEventListener("click", function () {
                    this.style.backgroundColor = "#FFF";
               });
          }
     });
