const Discord = require('discord.js');

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "top", 

  options: [], 

    description: 'En çok coini olan 25 kişiyi gösterir.',

    run: async (client, interaction) => {

const Teyit = await client.coin.all().filter(data => data.ID.startsWith(`coin_`)).sort((a, b) => b.data - a.data)

        Teyit.length = 25

        let FinalDB = ""

        for (var i in Teyit) {

          FinalDB += `**${Teyit.indexOf(Teyit[i])+1}. ${client.users.cache.get(Teyit[i].ID.slice(5)).tag}** - **${Teyit[i].data}** Coin!\n`

        }

        const embed = new Discord.MessageEmbed()

      
        .addField(':coin: Users with the most coins.', FinalDB.replace('undefined','Unknown user.'))

        interaction.reply({embeds: [embed]})

}

}

 