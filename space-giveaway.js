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
const logs = require('discord-logs');
logs(client);
client.login(process.env.TOKEN) 

client.on("guildMemberAdd", (member) => {
const embed = new Discord.MessageEmbed() 

.setDescription(`<:join_green:910008550204514315> Sunucumuza Hoşgeldin ${member.user}, <a:awavinghand:921392931867357235>! 
<:rules:799571949286064159> <#754205434088521831> Kanalını okumayı unutma. 
<:dadlu_kedi:917011422922301440> Merhaba diyerek sohbete başlamaya ne dersin? 
`) 

.setColor('GREEN') 

.setFooter(`Space Giveaway Support`, client.user.avatarURL()) 
const row = new MessageActionRow() 
.addComponents(
  new MessageButton() 

.setStyle('PRIMARY')

.setLabel('Say Hello!')
.setEmoji('921392931867357235')
.setDisabled(true) 
.setCustomId(`say_hello_${member.user.id}`) 
  )
client.channels.cache.get('843458021040455740').send({embeds: [embed], components: [row]})
var memberHypesquad = member.user.flags.toArray()
if (memberHypesquad.includes("HOUSE_BRILLIANCE")) {
member.roles.add('926125420267589713') 
} else if (memberHypesquad.includes("HOUSE_BRAVERY")) {
member.roles.add('926125424164098078') 
} else if (memberHypesquad.includes("HOUSE_BALANCE")) {
member.roles.add('926125908874649610') 
}


}) 

client.on("messageCreate", async (msg) => {

    if (msg.content.toLowerCase() === ".kurallar") {

if(!msg.author.id == "753842258457002036") return 

const embed = new Discord.MessageEmbed() 

.setTitle('<:rules:799571949286064159> Space Giveaway Community Rules!')

.setDescription(`

> <a:awavinghand:921392931867357235> Selam, lütfen aşşağıdaki tüm kuralları okuyunuz ve hepsine uymaya çalışınız!

<:wimpis:905855714096975892> Din, ırkçılık gibi şeyler yapmak yasak!

Cezası: *Sınırsız ban*

<:role_req:921813958212603974> Sebepsiz yere bir yetkili & yüksek rolü etiketlemek yasak!

Cezası: *1 Saat Mute*

<:sgs_slash:921392929015210005> <#843458021040455740> Kanalında komut kullanmak yasak!

Cezası: *1 Saat Mute*

<:link-1:843504209081270282> Sunucuda reklam amaçlı, kötü amaçlı Linkler vb. Linkler atmak yasak!

Cezası: *1 Gün Mute*

<:dadlu_kedi:917011422922301440> Sunucuda birine saygısız şekilde, kırıcı, küfür vb. Etmek yapmak yasaktır!

Cezası: *1 Gün Mute*

<:tik:804253394326913085> Sunucuda +18 gif, fotoğraf, video, link oatlamşka yasaktır!

Cezası: *Sınırsız ban*


client.on("messageCreate", async (msg) => {

    if (msg.content.toLowerCase() === "merhaba") {
if(msg.author.bot) return 
      
msg.reply(`Merhaba, <a:awavinghand:921392931867357235>!`) 

} 

}) 
client.on('ready', async(i) => {
  console.log('ldlsk') 
  let sw = client.guilds.cache.get('752164000418234448') 
var members = await sw.members.fetch()
    client.guilds.cache.forEach((sunucu) => {
      if (!sunucu.id === "752164000418234448") return;
      sunucu.members.cache.filter(e => !e.user.bot && e.user.flags).map(cat => {
        
          let flags = cat.user.flags.toArray();
        if (flags.includes("HOUSE_BRILLIANCE")) {

cat.roles.add("926125420267589713") 
           console.log(`verdim Brillance ${cat.user.username} ` ) 
} else if (flags.includes("HOUSE_BRAVERY")) {

cat.roles.add("926125424164098078") 
console.log(`verdim Bravery ${cat.user.username} `) 
} else if (flags.includes("HOUSE_BALANCE")) {

cat.roles.add("926125908874649610") 
console.log(`verdim Balance ${cat.user.username} ` ) 
} 
  
      }) 
     }) 
     
  
 }) 
client.on('guildMemberBoost', async(member) => {

let sunucuID = "752164000418234448" 

let kanal = "926527982435176519" 
let sw = client.guilds.cache.get('752164000418234448') 

var members = await sw.members.fetch()
let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount

let tier = client.guilds.cache.get(sunucuID).premiumTier

const cevaplar = [

"Sunucuya bir boost yolladı!", "Sunucuya bir boost gönderdi!", "Sunucuya bir kargo gönderdi ve içinden boost çıktı!", "Sunucuya garip bir şey gönderdi *b-b-bu bir evet bu bir boost*!", "Sunucuya boost basarak kalbimizi çaldı!", "Sunucuya pizza yerine boost gönderdi. Dikkat et üyelerimiz çok kızabilir *hrrrrr*!", "Sunucuda bir dondurmacı açtı ve kazandığı para ile boost bastı!", "Sunucuya bir bomba attı ve *BUMMM* heryer pembe boost ile kaplı!"

]

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

let mesaj = `<:bust_iste:926527923127730226> ${member.user} ${cevap}

`
members.get(member.user.id).roles.add('926538671874797639') 
client.channels.cache.get(kanal).send({content: mesaj}) 
})

client.on('guildMemberUnBoost', (member) => {

let sunucuID = "752164000418234448" 

let kanal = "926527982435176519" 

let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount

let tier = client.guilds.cache.get(sunucuID).premiumTier

const cevaplar = [

"Sunucuya bir boostunu geri çekti!", "Sunucuya bir kargo göndermişti ama adres yanlışmış!", "Sunucuya garip bir şey gönderdi *b-b-bu bir evet yanlış basılmış boost!", "Sunucuya bastığı Boostu geri çekti ama hala onu seviyoruz!", "Sunucuya boost yerine pizza göndermiş. Üyelerimiz çok mutlu *yummy*!", "Sunucuda bir dondurmacı açtı ve kazandığı para ile uzaklara gitti!", "Sunucuya bir bomba attı ve *BUMMM* heryer siyah boost ile kaplı!"

]

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

let mesaj = `<:bust_iste:926527923127730226> ${member.user} ${cevap}

`

client.channels.cache.get(kanal).send({content: mesaj}) 

})

client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

let sunucuID = "752164000418234448" 

let kanal = "926527982435176519" 

let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount

let tier = client.guilds.cache.get(sunucuID).premiumTier

let mesaj = `:tada: YAAAAY! Sunucumuz artık ${tier}. seviye!`

client.channels.cache.get(kanal).send({content: mesaj}) 

})

client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

let sunucuID = "752164000418234448" 

let kanal = "926527982435176519" 

let boost = client.guilds.cache.get(sunucuID).premiumSubscriptionCount

let tier = client.guilds.cache.get(sunucuID).premiumTier

let mesaj = `<:sgs_error:921392927568195645> Hüğ. Sunucumuz 1 seviye kaybetti artık ${tier}. seviyeyiz.`

client.channels.cache.get(kanal).send({content: mesaj}) 

})

