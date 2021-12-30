const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const INTENTS = Object.entries(Discord.Intents.FLAGS).filter(([K]) => ![].includes(K)).reduce((t, [, V]) => t | V, 0) 
const client = new Discord.Client({intents: INTENTS  }) 
const db = require("croxydb"); 
const {MessageActionRow, MessageButton } = require("discord.js");
client.commands = new Discord.Collection();
const fetch = ("node-fetch");
const fs = require("fs");
require("./utils/loader.js")(client) 

client.login(process.env.TOKEN) 

client.on("guildMemberAdd", (member) => {
const embed = new Discord.MessageEmbed() 

.setDescription(`Sunucumuza Hoşgeldin ${member.user}, <a:awavinghand:921392931867357235>! 
<#754205434088521831> Kanalını okumayı unutma. 
<:dadlu_kedi:917011422922301440> Merhaba diyerek sohbete başlamaya ne dersin? 
`) 

.setColor('GREEN') 

.setFooter(`Space Giveaway Support`, client.user.avatarURL()) 

client.channels.cache.get('843458021040455740').send({embeds: [embed]})
var memberHypesquad = member.user.flags.toArray()
if (memberHypesquad.includes("HOUSE_BRILLIANCE")) {
member.roles.add('926125420267589713') 
} else if (memberHypesquad.includes("HOUSE_BRAVERY")) {
member.roles.add('926125424164098078') 
} else if (memberHypesquad.includes("HOUSE_BALANCE")) {
member.roles.add('926125908874649610') 
}


}) 

client.on('ready', async(i) => {
  console.log('ldlsk') 
  setInterval(() => {

    client.guilds.cache.forEach(sunucu => {

      if (!sunucu.id === "752164000418234448") return;

      sunucu.members.cache
        .filter(e => !e.user.bot && e.user.flags)

        .map(cat => {

          let flags = cat.user.flags.toArray();
        if (!flags) {
          
         } else if (flags.includes("HOUSE_BRILLIANCE")) {

cat.roles.add("926125420267589713") 

} else if (flags.includes("HOUSE_BRAVERY")) {

cat.roles.add("926125424164098078") 

} else if (flags.includes("HOUSE_BALANCE")) {

cat.roles.add("926125908874649610") 

} 
  
 
       })
     })
  }) 
 }) 