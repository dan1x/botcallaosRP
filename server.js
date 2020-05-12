const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("ola zoi koxi!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("!koxi")) {
     message.channel.send("ola zoi koxi, soi fundador de callaosRP!");
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("!dani")) {
     message.channel.send("que pasa?");
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("hola")) {
     message.channel.send("hola :D");
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("f")) {
     message.channel.send("F");
   }
 
 });
 
 client.login("NzA5ODI4NDMwNDg0NzMzOTkz.Xrrn3A.FIU1uhjNvk8a6wUbSG_uLV9Oh20");
