// getting message input field object
var inputElement = document.getElementById("inputMessenger");

// set idConv and idUser to your desired values
var idConv = 1;
var idUser = 1;

// new event listener
inputElement.addEventListener("keyup", function (event) {
    // if enter
    if (event.key === "Enter") {
        let inputText = inputElement.value; // defining the inputtext

        // if nothing in text
        if (inputText.length > 0) {
            let currentDate = new Date().toISOString().substr(0, 10); // get current date in ISO 8601 format
            let currentTime = new Date().toLocaleTimeString('en-US', {hour12: false}); // get current time in user's local time zone

            let messageToBeSent = {
                "contenuMessage": inputText,
                "dateMessage": currentDate,
                "heureMessage": currentTime
            };
            console.log(messageToBeSent)
            // make POST request to server with message data
            fetch(`http://wavechatapi.ddns.net:6500/app/message/conv/${idConv}/user/${idUser}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageToBeSent)
            })
            .then(response => response.json())
            .then(data => console.log(data)) // handle server response
            .catch(error => console.error(error));

            document.getElementById("inputMessenger").value = ""; // clear input field
        }
    }
});
