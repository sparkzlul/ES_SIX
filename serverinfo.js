const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("Works.");
    let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#ff0000")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("Server Size", message.guild.memberCount);

        return message.channel.send(serverembed);
} 

module.exports.help = {
    name: "serverinfo"
}