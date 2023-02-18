const usernames = ["Chrolo", "Baptiste", "Nino"]; // Template names 

// Define an array of template messages
const templateMessages = [ // Template messages
     "kys ?", "kys !", "kys."
];

// Shuffle the arrays
shuffleArray(usernames); // shuffling usernames
shuffleArray(templateMessages); // shuffling messages

// Generate 50 random messages
let messages = "";
for (let i of Array(5).keys()) { // loop to display x messages
     // Randomly choose a username and message
     const username = usernames[Math.floor(Math.random() * usernames.length)];
     const message =
          templateMessages[Math.floor(Math.random() * templateMessages.length)];

     messages +=    `<div class="messageBox">
                        <img class="profilePictureMessage" src="images/groupChat.png">
                        <div class="textMessage">
                            <p class="usernameChat">${username}</p>
                            <p class="messageContent">${message}</p>
                        </div>
                    </div>`;
}
document.write(messages);

// Function to shuffle
function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
     }
}
