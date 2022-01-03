const Discord = require("discord.js")

const { MessageButton } = require("discord.js") 

const db = require("croxydb") 

const { MessageAttachment } = require("discord.js");

const { DiscordBanners } = require('discord-banners');

module.exports = {

   

    name: "kullanıcı-bilgi", 

  options: [

             {          

            name: 'user',

            description: 'Kim hakkında bilgi almak istiyorsun? ❔ Örnek: Cheesey#0001 ',

            type: 'USER',

            required: false

        }

  ], 

    description: '👤 Kullanıcı hakkında bilgi alırsınız.', 

  

    run: async (client, interaction) => {
const discordBanners = new DiscordBanners(client);
   let dil = db.fetch(`language_${interaction.guild.id}`)

const u = interaction.options.getUser('user') 

let user = u || interaction.user

const banner = await discordBanners.getBanner(user.id, { size: 2048, format: "png", dynamic: true })

let owner = db.fetch(`owner_${user.id}`) 

let yetkili = db.fetch(`yetkili_${user.id}`) 

let mod = db.fetch(`mod_${user.id}`)

let dev = db.fetch(`dev_${user.id}`) 

let voter = db.fetch(`voter_${user.id}`) 

let mesaj = await client.mesaj.fetch(`toplam_mesaj_${interaction.guild.id}_${user.id}`) 

const flags = {

  HOUSE_BRAVERY: "<:mor_ev:909725644773027890>",

  HOUSE_BRILLIANCE: "<:turuncu_ev:909725514258874418>",

  HOUSE_BALANCE: "<:mavi_ev:909725933089476619>",

};

const userFlags = user.flags.toArray();

const rozet = userFlags.length ? userFlags.map((flag) => flags[flag]).join(" ") : ""

if(!dil) {

if(banner) {

const embed1 = new Discord.MessageEmbed() 

.setTitle("Profil") 

.addField(`👤 Name`, `${user.username}.`) 

.addField(`🔮 Badged`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${voter || ""} ${rozet} <:wumpus_abi:909374977957048330>`) 

.addField("💭 Total message", `${mesaj || "He never texted me."}.`) 

.addField("🗓️ Account opening date", `<t:${parseInt(user.createdAt / 1000)}> (<t:${parseInt(user.createdAt / 1000)}:R>)`)

.setColor("GREEN") 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

const embed2 = new Discord.MessageEmbed() 

.setTitle('Kullanıcı Avatar ve Banner') 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

.setColor('BLURPLE') 

.setImage(banner)

interaction.reply({

embeds: [embed1, embed2]

})

} else {

const embed1 = new Discord.MessageEmbed() 

.setTitle("Profil") 

.addField(`👤 Name`, `${user.username}.`) 

.addField(`🔮 Badged`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${voter || ""} ${rozet} <:wumpus_abi:909374977957048330>`) 

.addField("💭 Total message", `${mesaj || "He never texted me."}.`) 

.addField("🗓️ Account opening date", `<t:${parseInt(user.createdAt / 1000)}> (<t:${parseInt(user.createdAt / 1000)}:R>)`)

.setColor("GREEN") 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

const embed2 = new Discord.MessageEmbed() 

.setTitle('Kullanıcı Avatar ve Banner') 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

.setColor('BLURPLE') 

.setDescription(`No Banner`) 

interaction.reply({

embeds: [embed1, embed2]

})

}

}  

if(dil === "TR") {

if(banner) {

const embed1 = new Discord.MessageEmbed() 

.setTitle("Profil") 

.addField(`👤 İsim`, `${user.username}.`) 

.addField(`🔮 Rozetleri`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${voter || ""} ${rozet} <:wumpus_abi:909374977957048330>`)

.addField("💭 Toplam attığı mesaj", `${mesaj || "Hiç mesaj atmamış."}.`) 

.addField("🗓️ Hesabın açılış tarihi", `<t:${parseInt(user.createdAt / 1000)}> (<t:${parseInt(user.createdAt / 1000)}:R>)`)

.setColor("GREEN") 

const embed2 = new Discord.MessageEmbed() 

.setTitle('Kullanıcı Avatar ve Banner') 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

.setColor('BLURPLE') 

.setImage(banner)

interaction.reply({

embeds: [embed1, embed2]

}) 

} else {

const embed1 = new Discord.MessageEmbed() 

.setTitle("Profil") 

.addField(`👤 İsim`, `${user.username}.`) 

.addField(`🔮 Rozetleri`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${voter || ""} ${rozet} <:wumpus_abi:909374977957048330>`)

.addField("💭 Toplam attığı mesaj", `${mesaj || "Hiç mesaj atmamış."}.`) 

.addField("🗓️ Hesabın açılış tarihi", `<t:${parseInt(user.createdAt / 1000)}> (<t:${parseInt(user.createdAt / 1000)}:R>)`)

.setColor("GREEN") 

const embed2 = new Discord.MessageEmbed() 

.setTitle('Kullanıcı Avatar ve Banner') 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

.setColor('BLURPLE') 

.setDescription(`Banner yok`) 

interaction.reply({

embeds: [embed1, embed2]

}) 

}
}

}

}