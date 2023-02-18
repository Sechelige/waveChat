const usernames = ["Chrolo", "Baptiste", "Nino"]; // Template names 

// Define an array of template messages
const templateMessages = [ // Template messages
     "Thank you for your message. I will get back to you soon.",
     "Sorry, I am unable to attend the meeting.",
     "I appreciate your help with this project.",
     "Please let me know if you need any further assistance.",
     "I apologize for the inconvenience.",
     "I am looking forward to our meeting tomorrow.",
     "I am unable to meet the deadline. Can we extend it?",
     "I have forwarded your request to the appropriate department.",
     "Thank you for your prompt response.",
     "I will keep you updated on the progress of the project.",
     "I am out of office at the moment.",
     "I appreciate your understanding.",
     "I am sorry, but I cannot help you with this issue.",
     "Please let me know if you need any clarification.",
     "I will follow up with you regarding your request.",
     "Thank you for your patience.",
     "I am available to discuss this further at your convenience.",
     "I have attached the requested document to this email.",
     "I will be on vacation next week.",
     "I appreciate your attention to this matter.",
     "I will do my best to resolve this issue.",
     "Thank you for your support.",
     "I am sorry, but I cannot make it to the event.",
     "I have forwarded your message to the appropriate person.",
     "I will get back to you as soon as possible.",
     "I am happy to hear that the project was successful.",
     "Please let me know if you have any questions.",
     "I apologize for any confusion caused.",
     "I will make sure to attend the next meeting.",
     "I appreciate your feedback.",
     "I have updated the document according to your suggestions.",
     "Thank you for your kind words.",
     "I am sorry for any inconvenience this may have caused.",
     "I will keep your request in mind for future projects.",
     "I am available for a call at your convenience.",
     "I have attached the necessary files to this email.",
     "I appreciate your cooperation.",
     "I will make sure to meet the deadline.",
     "Please let me know if there is anything else you need from me.",
     "I am sorry, but I cannot approve your request.",
     "I will make sure to address this issue as soon as possible.",
     "Thank you for bringing this to my attention.",
     "I appreciate your time and effort on this project.",
     "I have reviewed your proposal and will get back to you soon.",
     "I am sorry, but I am not available for a meeting today.",
     "I have sent you the information you requested.",
     "I will follow up with you regarding the status of your request.",
     "Thank you for your interest in our product.",
     "I am sorry, but I cannot provide you with the information you requested.",
     "I appreciate your patience and understanding.",
     "I will make sure to attend the next conference.",
     "Please let me know if you need any assistance.",
     "I am sorry, but I am unable to attend the event.",
     "I have forwarded your message to the appropriate department.",
     "Thank you for your cooperation on this project.",
     "I am available to discuss this further if needed.",
     "I appreciate your input on this matter.",
     "I will keep you updated on the progress of the project.",
     "Please let me know if you have any concerns.",
     "I am sorry, but I cannot meet the deadline.",
     "I have attached the necessary forms to this email.",
     "Thank you for your help with this project.",
     "I am sorry for any inconvenience this may have caused you."
];

// Shuffle the arrays
shuffleArray(usernames); // shuffling usernames
shuffleArray(templateMessages); // shuffling messages

// Generate 50 random messages
let messages = "";
for (let i of Array(600).keys()) { // loop to display x messages
     // Randomly choose a username and message
     const username = usernames[Math.floor(Math.random() * usernames.length)];
     const message =
          templateMessages[Math.floor(Math.random() * templateMessages.length)];

     messages += `<div class="messageBox">
                        <img class="profilePictureMessage" src="images/groupChat.png">
                        <div class="textMessage">
                            <p class="usernameChat">${username}</p>
                            <p class="messageContent">${message}</p>
                        </div>
                    </div>`;
}
containerDiscussion.innerHTML = messages

// Function to shuffle
function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
     }
}
