// getting message input field object
var inputElement = document.getElementById("inputMessenger");

// new event listener
inputElement.addEventListener("keyup", function (event) {
     
    // if enter
     if (event.key === "Enter") {
          var inputText = inputElement.value; // defining the inputtext
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
});
