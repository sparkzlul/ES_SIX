const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("Works.");
    return message.channel.sendMessage('thanos car');
}

module.exports.help = {
    name: "thanos"
}
