require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Bot is online!');
  client.user.setPresence({
    status: 'online',
    activity: {
      name: 'Wave Central Up!',
      type: 'WATCHING'
    }
  });

  // Fetch the user with ID 330436435763265537
  client.users.fetch('330436435763265537')
    .then(user => {
      // Send a message to the user
      user.send('Hello, I am your friendly neighborhood bot!');
    })
    .catch(error => {
      console.error(error);
    });
});

client.login(token);
