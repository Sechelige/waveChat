const usernames = ["Alice", "Bob", "Charlie"];

// Define an array of template messages
const templateMessages = [
     "Hello",
     "How are you?",
     "Nice to see you!",
     "What are you up to?",
     "How was your day?",
     `Hi there! How are you? I hope this message finds you well. I just wanted to touch base and see how you're doing. It's been a while since we last spoke, and I thought it would be great to catch up.What have you been up to lately? Anything exciting going on in your life? I've been keeping busy with work, but I'm trying to make some time for hobbies and fun activities too. Let's plan a call or meet up soon to catch up properly. It would be great to hear all about your adventures and share some of mine too. Just let me know what works for you and we can schedule something.`,
];

// Shuffle the arrays
shuffleArray(usernames);
shuffleArray(templateMessages);

// Generate 50 random messages
let messages = "";
for (let i of Array(50).keys()) {
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

function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
     }
}
