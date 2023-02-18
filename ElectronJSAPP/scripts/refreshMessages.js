const convId = 1;
fetch(`http://wavechatapi.ddns.net:6500/app/message/conv/${convId}`)
     .then((response) => response.json())
     .then((data) => {
          let messages = "";
          for (let i = 1; i < data.length; i++) {
               messages += `<div class="messageBox">
                        <img class="profilePictureMessage" src="images/groupChat.png">
                        <div class="textMessage">
                            <p class="usernameChat">${data[i].nomUtilisateur}</p>
                            <p class="messageContent">${data[i].contenuMessage}</p>
                        </div>
                    </div>`
          }
          containerDiscussion.innerHTML = messages;
     }).then(response => response.json())
     .then(data => {
          console.log("test")
     })
