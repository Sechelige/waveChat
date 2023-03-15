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
});

client.login(token);

