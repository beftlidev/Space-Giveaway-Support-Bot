const Discord = require('discord.js');

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "reboot", 

  options: [], 

    description: 'Yine Cheesey özel.',

    run: async (client, interaction) => {

if(interaction.user.id != "753842258457002036") return interaction.reply("**Bu komutu sadece sahibim kullanabilir!!**")

const embed = new Discord.MessageEmbed() 

.setDescription(`Restart atmak istediğinden emin misin?`) 

.setColor('RED')

const row = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle('PRIMARY')

.setLabel('Onayla')

.setEmoji('921392926683197460')

.setCustomId('onayla')

) 

interaction.reply({embeds: [embed], components: [row]})

const filter = (interactionn) => interactionn.customId === 'onayla' && interactionn.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({ componentType: "BUTTON", filter, time: 15000 });

collector.on('collect', async i => {

if (i.customId === "onayla") {

const embed = new Discord.MessageEmbed() 

.setDescription('Bot\' a restart atılıyor lütfen bekleyin!') 

.setColor('GREEN')

const a = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle('DANGER')

.setLabel('Onayla')

.setEmoji('921392926683197460')

.setDisabled(true) 

.setCustomId('onayla')

) 

await i.update({embeds: [embed], components: [a]}) 

return process.exit()

}
})
collector.on('end', collected => {

const embed = new Discord.MessageEmbed() 

.setDescription('Reboot işlemi iptal edildi!')

.setColor('RED')

        return interaction.editReply({embeds: [embed], components: []})
        }) 


}

}