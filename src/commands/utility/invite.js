const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
  
  let embed = new RichEmbed() 
  .setColor(color)
  .setDescription('**[Click Here](https://discord.com/api/oauth2/authorize?client_id=963080522010075167&permissions=8&scope=bot)** To Invite Me to your server!')
  message.channel.send(embed);

}

exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "invite",
    description: "invite the bot to your server",
    usage: "invite"
}
