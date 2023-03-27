require("dotenv").config();
const token = process.env.DISCORD_TOKEN;
const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
     console.log("Bot is online!");
     client.user.setPresence({
          status: "online",
          activity: {
               name: "Wave Central Up!",
               type: "WATCHING",
          },
     });

     // sends a message to user with ID 330436435763265537
     // the message is a random up message which is taken randomly from the array of up messages
     // the message contains the date and time of the up

     client.users.fetch("330436435763265537").then((user) => {
          const upMessages = [
               "Wave Central is up!",
               "Wave Central is up again!",
               "Wave Central is up again! :)",
               "Wave Central is up again! :D",
               "Wave Central is up again! :P",
          ];
          const randomUpMessage =
               upMessages[Math.floor(Math.random() * upMessages.length)];
          user.send(`${randomUpMessage} ${new Date()}`);
     });
});

client.on("message", (message) => {
     // ping command
     if (message.content === "!ping") {
          message.channel.send("Pong.");
     }

     // system uptime command
     if (message.content === "!uptime") {
          message.channel.send(`System uptime: ${process.uptime()} seconds`);
     }

     // bunch of commands that could be useful to get information about the linux server
     if (message.content === "!cpu") {
          const { exec } = require("child_process");
          exec(
               'cat /proc/cpuinfo | grep "model name" | uniq',
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`CPU: ${stdout}`);
               }
          );
     }

     if (message.content === "!cpucores") {
          const { exec } = require("child_process");
          exec(
               'cat /proc/cpuinfo | grep "cpu cores" | uniq',
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`CPU Cores: ${stdout}`);
               }
          );
     }

     if (message.content === "!cpumhz") {
          const { exec } = require("child_process");
          exec(
               'cat /proc/cpuinfo | grep "cpu MHz" | uniq',
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`CPU MHz: ${stdout}`);
               }
          );
     }

     if (message.content === "!cpuload") {
          const { exec } = require("child_process");
          exec(
               "cat /proc/loadavg | awk '{print $1}'",
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`CPU Load: ${stdout}`);
               }
          );
     }

     if (message.content === "!memory") {
          const { exec } = require("child_process");
          exec(
               "free -m | awk 'NR==2{printf \"Memory Usage: %s/%sMB (%.2f%%)\", $3,$2,$3*100/$2 }'",
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`${stdout}`);
               }
          );
     }

     if (message.content === "!disk") {
          const { exec } = require("child_process");
          exec(
               'df -h | awk \'$NF=="/"{printf "Disk Usage: %d/%dGB (%s)", $3,$2,$5}\'',
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`${stdout}`);
               }
          );
     }

     if (message.content === "!network") {
          const { exec } = require("child_process");
          exec(
               "ip route get 1 | awk '{print $NF;exit}'",
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`Network: ${stdout}`);
               }
          );
     }

     if (message.content === "!networkip") {
          const { exec } = require("child_process");
          exec("hostname -I", (err, stdout, stderr) => {
               if (err) {
                    console.error(err);
                    return;
               }
               message.channel.send(`Network IP: ${stdout}`);
          });
     }

     if (message.content === "!networkmac") {
          const { exec } = require("child_process");
          exec("cat /sys/class/net/eth0/address", (err, stdout, stderr) => {
               if (err) {
                    console.error(err);
                    return;
               }
               message.channel.send(`Network MAC: ${stdout}`);
          });
     }

     if (message.content === "!networkgateway") {
          const { exec } = require("child_process");
          exec(
               "ip route show default | awk '{print $3}'",
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`Network Gateway: ${stdout}`);
               }
          );
     }

     if (message.content === "!networkdns") {
          const { exec } = require("child_process");
          exec(
               "cat /etc/resolv.conf | grep nameserver | awk '{print $2}'",
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`Network DNS: ${stdout}`);
               }
          );
     }

     if (message.content === "!networkspeed") {
          const { exec } = require("child_process");
          exec(
               "ethtool eth0 | grep Speed | awk '{print $2}'",
               (err, stdout, stderr) => {
                    if (err) {
                         console.error(err);
                         return;
                    }
                    message.channel.send(`Network Speed: ${stdout}`);
               }
          );
     }

     if (message.content === "!networkstatus") {
          const { exec } = require("child_process");
          exec("cat /sys/class/net/eth0/operstate", (err, stdout, stderr) => {
               if (err) {
                    console.error(err);
                    return;
               }
               message.channel.send(`Network Status: ${stdout}`);
          });
     }

     if (message.content === "!networkconnections") {
          const { exec } = require("child_process");
          exec("netstat -tulpn | wc -l", (err, stdout, stderr) => {
               if (err) {
                    console.error(err);
                    return;
               }
               message.channel.send(`Network Connections: ${stdout}`);
          });
     }

     // help command
     if (message.content === "!help") {
          message.channel.send(
               "!ping - Pong! \n!uptime - System uptime \n!cpu - CPU model \n!cpucores - CPU cores \n!cpumhz - CPU MHz \n!cpuload - CPU load \n!memory - Memory usage \n!disk - Disk usage \n!network - Network \n!networkip - Network IP \n!networkmac - Network MAC \n!networkgateway - Network Gateway \n!networkdns - Network DNS \n!networkspeed - Network Speed \n!networkstatus - Network Status \n!networkconnections - Network Connections"
          );
     }

     // stats command that sends every stats about the linux server
     if (message.content === "!stats") {
          message.channel.send(
               "!ping - Pong! \n!uptime - System uptime \n!cpu - CPU model \n!cpucores - CPU cores \n!cpumhz - CPU MHz \n!cpuload - CPU load \n!memory - Memory usage \n!disk - Disk usage \n!network - Network \n!networkip - Network IP \n!networkmac - Network MAC \n!networkgateway - Network Gateway \n!networkdns - Network DNS \n!networkspeed - Network Speed \n!networkstatus - Network Status \n!networkconnections - Network Connections"
          );
     }
});

client.login(token);
