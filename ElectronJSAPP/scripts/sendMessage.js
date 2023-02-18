var inputElement = document.getElementById("inputMessenger");
var idConv = 1;
var idUser = 1;
var myDiv = document.getElementById("containerDiscussion");

inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let inputText = inputElement.value;

        if (inputText.length > 0) {
            let currentDate = new Date().toISOString().substr(0, 10);
            let currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });

            let messageToBeSent = {
                "contenuMessage": inputText,
                "dateMessage": currentDate,
                "heureMessage": currentTime
            };

            fetch(`http://wavechatapi.ddns.net:6500/app/message/conv/${idConv}/user/${idUser}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageToBeSent)
            })
                .then(response => response.json())
                .then(data => {
                    myDiv.scrollTop = myDiv.scrollHeight;
                })

            document.getElementById("inputMessenger").value = "";
        }
    }
});
