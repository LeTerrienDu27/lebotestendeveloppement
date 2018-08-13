const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Le bot est en développement");
    console.log("Lebot a bien été connecté");
});

bot.login("NDc4NjU1MDQyMTc4NjQ2MDE3.DlORew.By5ZWkuS1N1ls6rbbIeUWO9ID_U");
