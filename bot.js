const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


var ServerID = "505390657175552001";// اي دي السيرفر
var ChannelID = "505394433106378762"; // اي دي الروم التبي يعمل فيها سبام
const prefix = '!';

client.on('warn', console.warn);

client.on('error', console.error);



});
client.on('message', message => {
     if (message.content === "!av-set") { // كل ما تسوي بوت وترفعه على خادم اكتب ذا الامر
client.user.setAvatar(`https://cdn.discordapp.com/avatars/324672376455299074/524312009e5ce435a1adf99080f76e63.jpg`)
 
}
}); 

var timer = setTimeout(timerFunc, 1000);

client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');    



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

client.login("Bot_Token");  // تكون البوت
