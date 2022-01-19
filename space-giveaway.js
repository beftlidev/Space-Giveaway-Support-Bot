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
client.setMaxListeners(50)
const {

    JsonDatabase,

    YamlDatabase

} = require("wio.db");

const coin = new JsonDatabase({

    databasePath:"./databases/coin.json" 

});
const mesaj = new JsonDatabase({databasePath:"./databases/mesaj.json"}) 
client.coin = coin 
client.mesaj =mesaj

client.on("guildMemberAdd", (member) => {
const embed = new Discord.MessageEmbed() 

.setDescription(`<:join_green:910008550204514315> Sunucumuza Hoşgeldin ${member.user}, <a:awavinghand:921392931867357235>! 
<:rules:799571949286064159> <#754205434088521831> Kanalını okumayı unutma. 
<:dadlu_kedi:917011422922301440> Merhaba diyerek sohbete başlamaya ne dersin? 
`) 

.setColor('GREEN') 

//.setFooter(`Space Giveaway Support`, client.user.avatarURL()) 
const row = new MessageActionRow() 
.addComponents(
  new MessageButton() 

.setStyle('PRIMARY')

.setLabel('Karşıla!')
.setEmoji('921392931867357235')
.setCustomId(`hello`) 
  )
client.channels.cache.get('843458021040455740').send({embeds: [embed], components: [row]}).then(msg => {
 db.set(`say_hello_id_${msg.id}`, member.user.id)
 }) 
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
<:link:843504209081270282> Sunucuda reklam amaçlı, kötü amaçlı Linkler vb. Linkler atmak yasak!
Cezası: *1 Gün Mute*
<:dadlu_kedi:917011422922301440> Sunucuda birine saygısız şekilde, kırıcı, küfür vb. Etmek yapmak yasaktır!
Cezası: *1 Gün Mute*
<:tik:804253394326913085> Sunucuda +18 gif, fotoğraf, video, link paylaşmak yasaktır!
Cezası: *Sınırsız ban*
<:user_help:911678949287927909> Herhangi bir hesap satmak, birinin kişisel bilgisini (telefon numarası, kimlik numarası vb.) paylaşmak yasaktır!
Cezası: *Sınırsız ban*
<:hastag:888415406937755688> <#933395557110673418>, <#848130151169392670>, <#911056301386268692>, <#919979806781755472>, <#923247333708300298> kanallarını amaçları dışında kullanmak yasaktır!
Cezası: *1 Gün Mute*
<:discord:888414495423225866> <#848130100825554984> Sebepsiz yere ticket açmak yasaktır!
Cezası: *1 Gün Mute*

<:sgs_error:921392927568195645> Not: Sunucuya giriş yaptığınız zaman bu kuralları okumuş ve kabul etmiş sayılırsınız.
`) 
.setFooter('Space Giveaway Community', client.user.displayAvatarURL()) 
.setColor('#0099ff') 
const row = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle('LINK')
.setLabel('Sunucu Davet Linki')

.setEmoji('')

.setURL('https://discord.gg/KZfAEjrPUF'), 
new MessageButton() 
 .setStyle('LINK')

.setLabel('Web Site')

.setEmoji('🌐')

.setURL('https://spacegiveaway.xyz/'), 
new MessageButton() 
.setStyle('LINK')

.setLabel('Space Giveaway Davet Linki')

.setEmoji('')

.setURL('https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot+applications.commands&permissions=2147483656')

) 

msg.channel.send({embeds: [embed], components: [row]}) 

} 

}) 
client.on("messageCreate", async (msg) => {

    if (msg.content.toLowerCase() === "merhaba") {
if(msg.author.bot) return 
      
msg.reply(`Merhaba, <a:awavinghand:921392931867357235>!`) 

} 

}) 
client.on("messageCreate", async (msg) => {

    if (msg.content.toLowerCase() === "sa") {

if(msg.author.bot) return 

msg.reply(`Aleyküm Selam Hoşgeldin, <a:awavinghand:921392931867357235>!`) 

} 

})
client.on('messageCreate', message => {

if (message.channel.id == "926527982435176519") {

message.react('<:bust_iste:926527923127730226>') 

} 

})

client.on('messageCreate', message => {
if (message.channel.id == "919979806781755472") {
const cevaplar = [
"🤣", "🙂", "🤩", "😁", "🤭", "🤔", "🙄", "🤯", "😖", "😳", "🤪"
] 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
message.react(cevap) 
}
})

client.on('messageCreate', message => {
if (message.channel.id == "933395557110673418") {
var members = await sw.members.fetch()
members.get(member.user.id).roles.add('933395378865315910')
const cevaplar = [
"😍", "😋", "🤩", "🤟", 
] 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
message.react(cevap) 
} 
}) 

client.on('messageCreate', message => {

if (message.channel.id == "847478473730818078") {

message.react('🎉') 

} 

})
    client.on('messageCreate', message => {

if (message.channel.id == "844812716899696640") {

const cevaplar = [

"<:crcivcivkalp2:886162883178803250>", "<:dadlu_kedi:917011422922301440>", "😍", "😋", "😘", "🤩", "😝", "🤗", "😻", "👌"

] 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

message.react(cevap) 

} 

})


client.on("messageCreate", message => {
  if (message.channel.id !== "843458132968734740") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (message.attachments.size < 1) {
    message.delete()
  } else {
message.react('👍') 
  message.react('👎')
  message.react('❤️')
  //message.react('😢')
message.react('🤔')
//message.react('😳')
    message.react('🤭')
  message.react('🤣') 
message.react('😍')

} 

})
client.on("messageCreate", async (msg) => {

    if (msg.content.toLowerCase() === "selamün aleyküm") {

if(msg.author.bot) return 

msg.reply(`Aleyküm Selam Hoşgeldin, <a:awavinghand:921392931867357235>!`) 

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
           //console.log(`verdim Brillance ${cat.user.username} ` ) 
} else if (flags.includes("HOUSE_BRAVERY")) {

cat.roles.add("926125424164098078") 
//console.log(`verdim Bravery ${cat.user.username} `) 
} else if (flags.includes("HOUSE_BALANCE")) {

cat.roles.add("926125908874649610") 
//console.log(`verdim Balance ${cat.user.username} ` ) 
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

"Sunucudaki bir boostunu geri çekti!", "Sunucuya bir kargo göndermişti ama adres yanlışmış!", "Sunucuya garip bir şey gönderdi *b-b-bu bir evet yanlış basılmış boost!", "Sunucuya bastığı Boostu geri çekti ama hala onu seviyoruz!", "Sunucuya boost yerine pizza göndermiş. Üyelerimiz çok mutlu *yummy*!", "Sunucuda bir dondurmacı açtı ve kazandığı para ile uzaklara gitti!", "Sunucuya bir bomba attı ve *BUMMM* heryer siyah boost ile kaplı!"

]

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

let mesaj = `<:bust_iste:926527923127730226> <:sgs_eksi:927072196101283890> ${member.user} ${cevap}

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

let mesaj = `<:sgs_error:921392927568195645> Sunucumuz 1 seviye kaybetti artık ${tier}. seviyeyiz.`

client.channels.cache.get(kanal).send({content: mesaj}) 

})

client.on('interactionCreate', async(i) => {

/*if (!i.customId.startsWith("hello")) {
  
  return 
} 
var id = i.customId.split("-")[1]*/
 if(i.customId == `hello`) {
let data = db.fetch(`tıkladı_${i.user.id}_${i.message.id}`)
let id = db.fetch(`say_hello_id_${i.message.id}`)
if(data == "mev") {
await i.deferUpdate()
return 

} 

if(!data) {

if(i.user.id == id) {
await i.deferUpdate();
let mesaj = `<a:awavinghand:921392931867357235> ${i.user} Herkese merhaba diyor!`

db.set(`tıkladı_${i.user.id}_${i.message.id}`,`mev`)
i.channel.send(mesaj) 
} else {

//if(!i.user.id == id) {
await i.deferUpdate();
let mesaj = `<a:awavinghand:921392931867357235> ${i.user}, <@${id}>'i selamlıyor!`

db.set(`tıkladı_${i.user.id}_${i.message.id}`,`mev`)
i.channel.send(mesaj) 
}
} 
 }
 if(i.customId == "tıkla_coin") {

const cevaplar = [

"1000", "2750", "1250", "1500", "2000", "2500", "2250", "1750", "3000", "3250","3500","3750","4000","4250", "4500", "4750", "5000", 

] 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

await coin.add(`coin_${i.user.id}`,cevap) 
const row = new MessageActionRow()
.addComponents(
  new MessageButton() 
.setStyle('PRIMARY')
.setLabel('Tıkla!')
.setDisabled(true) 
.setEmoji('👆')
.setCustomId('tıkla_coin') 
) 
i.update({content: `İlk ${i.user} (\`${i.user.tag}\`) tıkladı ve ${cevap} coin kazandı, tebrikler 🎉!`, components: [row]}) 

}
})

client.on('messageCreate', message => {
if(message.channel.id === "843458021040455740") {
if(message.author.bot) return 

const cevaplar = [

"hayır", "hayır", "hayır", "hayır", "hayır", "hayır", "evet", "hayır", "hayır", "hayır", "hayır", "hayır", "hayır", "hayır", "hayır", "evet", "hayır", "hayır", "hayır", "hayır", "hayır", "hayır", "hayır", "evet", "hayır", "hayır", 

] 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

if(cevap == "evet") {

const row = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle('PRIMARY')

.setLabel('Tıkla!')

.setEmoji('👆')

.setCustomId('tıkla_coin') 

) 

message.channel.send({content: 'Aşşağıdaki butona ilk tıklayan 1000-5000 arası coin kazanacak!', components: [row]} ) 

} else {

return 

} 
} 
})

//client.on('interactionCreate', async(i) => {


client.on('messageCreate', async(m) => {
if(m.author.bot) return 
await coin.add(`coin_${m.author.id}`, 5)

}) 

process.on("unhandledRejection", (reason, promise) => {
return console.log(reason)
    });
