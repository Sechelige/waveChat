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

client.login('MTA4NTI4MTg4OTMxODg3NTIwNg.GkdHJv.IAkdNHK9G0ys-l8ofgrUWXw6m-ctUkrHGuuxpU');

