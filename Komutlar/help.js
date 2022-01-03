const Discord = require('discord.js');

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {


    name: "yardım", 

  options: [], 

    description: '📜 Tüm Komutları gösterir.', 



    
    run: async (client, interaction) => {

const select = new Discord.MessageSelectMenu().setCustomId("select").setPlaceholder("Click!").addOptions([

            {

              label: 'Giveaway',

              description: 'Shows Giveaway commands.',

              emoji: '🎉', 

              value: 'giveaway_help',

           },

            {

              label: 'User',

              description: 'Shows user commands.',

             emoji: '911678949287927909', 

              value: 'user_help',

            }, 

            {

              label: 'Moderation',

              description: 'Shows moderation commands.',

              emoji: '927562930369736705', 

              value: 'mod_help',

            }, 

          ])

          const row = new Discord.MessageActionRow().addComponents([select])

const bum = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle('LINK') 

.setLabel('My Website') 

.setEmoji('🌐')

.setURL('https://spacegiveaway.xyz/')

)  

interaction.reply({content: `https://media.discordapp.net/attachments/883597056403451924/911685367319646258/PicsArt_11-20-08.22.28.png`, components: [bum, row]}) 

const cekilis = new Discord.MessageEmbed() 

.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({dynamic: true}))

.setFooter(`Space Giveaway`, client.user.avatarURL() )

.setColor('#0099ff') 

.setTitle(`🎉 Giveaway Commands`)

.setDescription(`\`giveaway-start, giveaway-end, giveaway-list, giveaway-delete, giveaway-reroll\``) 

const user = new Discord.MessageEmbed() 

.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({dynamic: true}))

.setFooter(`Space Giveaway`, client.user.avatarURL() )

.setColor('#0099ff')

.setTitle(`<:user_help:911678949287927909> User Commands`) 

.setDescription(`\`user, invite, statistics, language, leader-board, rank\``)

const mod = new Discord.MessageEmbed() 

.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({dynamic: true}))

.setFooter(`Space Giveaway`, client.user.avatarURL() )

.setColor('#0099ff') 

.setTitle(`<:mod_fln:927562930369736705> Moderation Commands`)

.setDescription(`\`add-emoji, level-log, level-settings, poll, ticket-set\``) 

const filter = x => x.customId == "select" && x.user.id == interaction.member.id

const collector = await interaction.channel.createMessageComponentCollector({ filter, time: 600000 })

collector.on("collect", async (i) => {

const val = i.values[0]

if(val == "giveaway_help") {

i.update({embeds: [cekilis], components: [bum, row]})

} 

if(val == "user_help") {

i.update({embeds: [user], components: [bum, row]})

} 

if(val == "mod_help") {

i.update({embeds: [mod], components: [bum, row]})

} 

}) 

collector.on("end",(collected, reason) => {

            if(reason == "time"){

         interaction.editReply({ content: "<:sgs_error:921392927568195645> The help menu was canceled because 10 minutes had passed!", components: [] })

            }

        })  

}

} 

