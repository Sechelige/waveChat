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
      user.send('Hello ! The wave central is up and running !');
    })
    .catch(error => {
      console.error(error);
    });
});

client.on('message', message => {
  if (message.content === '!commands') {
    message.channel.send('Available Commands: !hello, !goodbye');
  }
  /*if (message.content === '!uptime') {
  	const uptime = os.uptime();
  	const hours = Math.floor(uptime / 3600);
  	const minutes = Math.floor((uptime % 3600) / 60);
  	const seconds = Math.floor(uptime % 60);
  	message.channel.send(`Uptime: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  }*/
});

client.login(token);
