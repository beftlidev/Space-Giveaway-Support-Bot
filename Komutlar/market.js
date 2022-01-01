const Discord = require('discord.js');

const db = require("croxydb") 

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "market", 

  options: [], 

    description: 'Market menüsü.',

    run: async (client, interaction) => {

let mesaj = `<:sgs_error:921392927568195645> Aşağıdaki menüden almak istediğiniz rolün üstüne tıklayın ve size gelsin!
**1)** Plüton - 500.000 Coin
**2)** Neptün - 450.000 Coin 
**3)** Satürn - 400.000 Coin 
**4)** Mars - 350.000 Coin 
**5)** Merkür - 250.000 Coin 
`

const select = new Discord.MessageSelectMenu()

.setCustomId("select")

.setPlaceholder("Choose a type of giveaway to view!")

.addOptions([

{label: 'Plüton', 

description: 'Plüton rolü ile uzayın yukarlarına çık!', 

value: 'pluton', }, 

{label: 'Neptün', 

description: 'Neptün rolünü al ve uzayda kısa bir yolculuk yap.', 

value: 'neptun', }, 

{label: 'Satürn', 

description: 'Satürn\' nün halkalarında biraz seyehat etmeye ne dersin?', 

value: 'saturn', }, 

{label: 'Mars', 

description: 'Mars\' da yaşam varmış sence doğrumu?', 

value: 'mars', }, 

{label: 'Merkür', 

description: 'Merkür, hmmm. Cidden nasıl bir gezegen olduğunu hatırlamıyorum. Denemek istermisin?', 

value: 'merkur', }, 

]) 

interaction.reply({content: mesaj, components: [select]}) 

const filter = x => x.customId == "select" && x.user.id == interaction.member.id

const collector = await interaction.channel.createMessageComponentCollector({ filter, time: 60000, max: 1 })

collector.on("collect", async (i) => {

const val = i.values[0]

let coin = await client.coin.fetch(`coin_${i.user.id}`)  

if (val == "pluton") {

if (!coin) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 500.000 coinin olması lazım.", ephemeral: true});

if (coin < 500000) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 500.000 coinin olması lazım.", ephemeral: true });

await client.coin.subtract(`coin_${i.user.id}`, 500000) 

i.user.roles.add('926868153592586282')

i.reply({content: `<:sgs_tick:921392926683197460> Başarı ile Plüton rolünü aldın!`})

} 

if (val == "neptun") {

if (!coin) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 450.000 coinin olması lazım.", ephemeral: true});

if (coin < 450000) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 450.000 coinin olması lazım.", ephemeral: true });

await client.coin.subtract(`coin_${i.user.id}`, 450000) 

i.user.roles.add('926868167094059028')

i.reply({content: `<:sgs_tick:921392926683197460> Başarı ile Neptün rolünü aldın!`})

} 

if (val == "saturn") {

if (!coin) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 400.000 coinin olması lazım.", ephemeral: true});

if (coin < 400000) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 400.000 coinin olması lazım.", ephemeral: true });

await client.coin.subtract(`coin_${i.user.id}`, 400000) 

i.user.roles.add('926868765881274418')

i.reply({content: `<:sgs_tick:921392926683197460> Başarı ile Satürn rolünü aldın!`})

} 

if (val == "mars") {

if (!coin) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 350.000 coinin olması lazım.", ephemeral: true});

if (coin < 350000) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 350.000 coinin olması lazım.", ephemeral: true });

await client.coin.subtract(`coin_${i.user.id}`, 350000) 

i.user.roles.add('926868662667862087')

i.reply({content: `<:sgs_tick:921392926683197460> Başarı ile Mars rolünü aldın!`})

}

if (val == "merkur") {

if (!coin) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 250.000 coinin olması lazım.", ephemeral: true});

if (coin < 250000) return i.reply({content: "<:sgs_error:921392927568195645> Ne yazıkki en az 250.000 coinin olması lazım.", ephemeral: true });

await client.coin.subtract(`coin_${i.user.id}`, 250000) 

i.user.roles.add('926868159280074782')

i.reply({content: `<:sgs_tick:921392926683197460> Başarı ile Merkür rolünü aldın!`})

} 

}) 

collector.on("end",(collected, reason) => {

if(reason == "time"){

interaction.editReply({ content: "👀 Menü deaktif edildi!", components: [] })

} 

}) 

} 

} 