const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("Works.");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("About Me")
    .setColor("#00ffed")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Created By", "sparkz#4976");

    return message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}