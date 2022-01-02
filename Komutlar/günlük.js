const Discord = require('discord.js');

const {MessageActionRow, MessageButton} = require("discord.js") 

const talkedRecently = new Set();

module.exports = {

  name: "günlük", 

  options: [] , 

    description: 'Günlük coin alırsın.',

    run: async (client, interaction) => {

const cevaplar = [

"500", "750", "1000", "1500", "2000", "2500", "250",

] 

const coin = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (talkedRecently.has(interaction.user.id)) {

        const embed = new Discord.MessageEmbed()

        .setColor("RED")

        .setDescription(`<:sgs_error:921392927568195645> Bu komutu günde bir kullanabilirsin!`)

        interaction.reply({embeds: [embed], ephemeral: true});

} else {

await client.coin.add(`coin_${interaction.user.id}`, coin) 

let toplam = await client.coin.fetch(`coin_${interaction.user.id}`)

        const embed = new Discord.MessageEmbed()

        .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({dynamic:true})).setThumbnail(interaction.guild.iconURL({dynamic:true})).setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setColor("#0099ff").setTimestamp()

       .setDescription(`Toplam ${coin} coin kazandın, tebrikler 🎉!`) 

        interaction.reply({embeds: [embed]})

talkedRecently.add(interaction.user.id);

setTimeout(() => {

  talkedRecently.delete(interaction.user.id);

}, 86400000);

}

}

} 

