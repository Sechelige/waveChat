var inputElement = document.getElementById("inputMessenger");
            inputElement.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
                    var inputText = inputElement.value;
                    let htmlCode = `<div class="messageBox">
                                        <img class="profilePictureMessage" src="images/groupChat.png">
                                        <div class="textMessage">
                                            <p class="usernameChat">Vous</p>
                                            <p class="messageContent">${inputText}</p>
                                        </div>
                                    </div>`;
                    document.getElementById("containerDiscussion").innerHTML += htmlCode;
                    document.getElementById("inputMessenger").value = "";
                    let objDiv = document.getElementById("containerDiscussion");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }
            })