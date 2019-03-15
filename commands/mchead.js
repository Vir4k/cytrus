const Discord = require('discord.js');
const request = require('request');

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.reply('You need to input the UUID or Name of the Minecraft Player!');
    
    request('https://cravatar.eu/head/' + args[0] + '/400.png', (req, res, png) => {
      if (png == 'Invalid minecraft username or uuid.') return message.reply('You need to input a Valid UUID/Name');
      message.channel.send(new Discord.Attachment('https://cravatar.eu/head/' + args[0] + '/200.png'));
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'mchead',
  category: 'Fun',
  description: 'Returns the head of the specified Minecraft Player',
  usage: 'mchead <name/UUID>'
};
