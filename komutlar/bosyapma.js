const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media1.tenor.com/images/b7a40bb42ec167a50bd54e625d072d0b/tenor.gif",
          color: 0xD97634,		 
           description: "**:stuck_out_tongue_winking_eye:   Hey Aslanım Boş Yapma !**"
		   }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'bosyapma',
  description: 'bosyapma gifi.',
  usage: 'bosyapma'
};
