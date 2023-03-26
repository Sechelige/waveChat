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

  // sends a message to user with ID 330436435763265537
  // the message is a random up message which is taken randomly from the array of up messages
  // the message contains the date and time of the up

  client.users.fetch('330436435763265537').then(user => {
    const upMessages = [
      'Wave Central is up!',
      'Wave Central is up again!',
      'Wave Central is up again! :)',
      'Wave Central is up again! :D',
      'Wave Central is up again! :P'
    ];
    const randomUpMessage = upMessages[Math.floor(Math.random() * upMessages.length)];
    user.send(`${randomUpMessage} ${new Date()}`);
  });
});

client.on('message', message => {
  // ping command
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
  // system uptime command
  if (message.content === '!uptime') {
    message.channel.send(`System uptime: ${process.uptime()} seconds`);
  }
  // command that sends the content of a neofetch command on the server
  if (message.content === '!neofetch') {
    const exec = require('child_process').exec;
    exec('neofetch', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      message.channel.send(`\`\`\`${stdout}\`\`\``);
    });
  }
});

client.login(token);
