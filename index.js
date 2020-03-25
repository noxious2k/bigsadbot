const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!play sketchers') {
    msg.reply('shut the fuck up');
  }
});

client.login('NjkyMjgxODgzMjg2OTYyMTk2.XnskTA.W043rNTsR1LeuDAmJHKESLKtgzc');




