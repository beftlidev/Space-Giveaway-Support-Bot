const Discord = require('discord.js');

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "coin", 

  options: [       {          

            name: 'user',

            description: 'Başkasının coin bakarsın.',

            type: 'USER',

            required: false

        }], 

    description: 'Toplam coinini gösterir.',

    run: async (client, interaction) => {

const user = interaction.options.getUser('user') 

let i = user || interaction.user

let toplam = await client.coin.fetch(`coin_${i.id}`)

        const embed = new Discord.MessageEmbed()

        .setAuthor(i.username, i.displayAvatarURL({dynamic:true})).setThumbnail(interaction.guild.iconURL({dynamic:true})).setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setColor("#0099ff").setTimestamp()

       .setDescription(`Toplam coinin: ${toplam}`) 

        interaction.reply({embeds: [embed]})

}

} 

