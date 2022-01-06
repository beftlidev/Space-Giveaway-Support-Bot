    

const Discord = require("discord.js");
const db = require("croxydb") 
const ms = require("ms");
const talkedRecently = new Set();
const path = require("path");

module.exports = {

    name: "çekiliş-başlat", 
  description: '🎉 Bir hediye başlatırsın.',
    options: [
        {
            name: 'duration',
            description: 'Hediyenin ne kadar süreceğini girin. ❔ Örnek değerler: 1m, 1h, 1d',
            type: 'STRING',
            required: true
        },
        {
            name: 'winners',
            description: 'Hediyenin kaç kazananı olmalı? ❔ Örnek: 1',
            type: 'INTEGER',
            required: true
        },
        {
            name: 'prize',
            description: 'Hediyenin ödülü ne olmalı? ❔ Örnek: Spotify',
            type: 'STRING',
            required: true
        },
        {
            name: 'channel',
            description: 'Hediyeyi başlatacak kanal nerede? ❔ Örnek: #heyyy',
            type: 'CHANNEL',
            required: false
        }, 
       {          
            name: 'other-giveaway-owner',
            description: 'Hediyeye başka bir sahip ekleyebilirsin. ❔ Örnek: @Cheesey#0001',
            type: 'USER',
            required: false
        }, 
       {          
            name: 'role-requirement',
            description: 'Hediyeye sadece hangi rolde katılabilirler? ❔ Örnek: @Üye',
            type: 'ROLE',
            required: false
        }, 
           {
      name: 'server-requirement',
      description: 'Hediyeye girmek için hangi sunucuda olmaları gerekir? ❔ Örnek: https://discord.gg/KZfAEjrPUF',
      type: 'STRING',
      required: false
    }, 
{
      name: 'message-requirement',
      description: 'Hediyeye katılmaları için kaç mesaj gerekiyor? ❔ Örnek: 100',
      type: 'STRING',
      required: false
    }, 
    ], 
  

    run: async (client, interaction) => {

let dil = db.fetch(`language_${interaction.guild.id}`)
const channel = interaction.options.getChannel('channel');
const giveawayChannel = channel || interaction.channel
const u = interaction.options.getUser('other-giveaway-owner') 
const user = u || interaction.user
const giveawayDuration = interaction.options.getString('duration');

const giveawayWinnerCount = interaction.options.getInteger('winners');

const giveawayPrize = interaction.options.getString('prize');

const rolereq = interaction.options.getRole('role-requirement') 

let invite = interaction.options.getString('server-requirement')
const msgreq = interaction.options.getString('message-requirement') 
if(!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){
            return interaction.reply({
                content: '<:sgs_error:921392927568195645> You must have permissions to manage messages to start a giveaway.',
                ephemeral: true
            });
        }

    if(!giveawayChannel.isText()) {

            return interaction.reply({

              content: '<:sgs_error:921392927568195645> The selected channel is not text-based.',

                ephemeral: true

            });

        }
if (talkedRecently.has(interaction.user.id)) {
        const embed = new Discord.MessageEmbed() 
        .setColor("RED") 
        .setDescription(`<:sgs_error:921392927568195645> You can use this command every 15 seconds.`) 
        interaction.reply({embeds: [embed], ephemeral: true})
} else {


let reqinvite;

    if(invite){

     await client.fetchInvite(invite).then(invitex => {

        let client_is_in_server = client.guilds.cache.get(invitex.guild.id)

        reqinvite = invitex

        if (!client_is_in_server) {

          return interaction.reply({

            embeds: [{

              color: "#2F3136",

              author: {

                name: client.user.username,

                icon_url: client.user.avatarURL

              },

              title: "Hmm!", 

              url: "https://spacegiveaway.xyz/",

              description:

                "Woah woah woah! \n😍I see a new server! \n❔ Are you sure I'm in it? \n😋 You should invite me to set this up as a necessity.!",

              timestamp: new Date(),

              footer: {

                icon_url: client.user.avatarURL,

                text: "Server Check"

              }

            }]

          })

        }

      })
} 

    client.giveawaysManager.start(giveawayChannel, {

      duration: ms(giveawayDuration),

      prize: giveawayPrize,

      winnerCount: giveawayWinnerCount,

      lastChance: {

        enabled: true,

        content: '**LAST CHANCE TO JOIN!**',

        threshold: 5000,

        embedColor: '#FF0000'

    },

      messages: {

        giveaway:":tada: :tada: **Giveaway Started** :tada: :tada:",

        giveawayEnded:":tada: :tada: **Giveaway Ended** :tada: :tada:",

        hostedBy: "Çekiliş yapan: {this.hostedBy}",

        dropMessage: "First 🎉 clicker wins!",

        inviteToParticipate: `<:sgs_tick:921392926683197460> Click on the 🎉 reaction to enter the giveaway!`, 

        drawing: `<a:saat:924159838873862174> Duration: {timestamp} \n<a:winner:921814769432924160> Winner(s): ${giveawayWinnerCount} \n<:sgc_owner:928130091949633557> Giveaway owner: ${user} \n<a:kar_kuresi:924159401588314143> Requirements: \n<:role_req:921813958212603974> Role requirement: ${rolereq || "No"} \n<:server_req:921813959282151514> Server requirement: ${invite || "No"} \n<:msgreq:928269459704135730> Message requirement: ${msgreq || "No"}`, 

        winMessage: "🎉 Congratulations, {winners}! **{this.prize}** Win!",

        embedFooter: " Giveaway",

        noWinner: `\<:sgs_error:921392927568195645> The giveaway was cancelled due to insufficient participation.\n<:yildizz:906166682391826432> Giveaway owner: ${user}`,

        winners: `\Winner(s) `,

        endedAt: "End"

      }, 

extraData: {
            server: reqinvite == null ? "null" : reqinvite.guild.id,
            role: rolereq == null ? "null" : rolereq.id,         
            message: msgreq == null ? "null" : msgreq, 
          }

    })

interaction.reply({content: `:tada: Nice! Giveaway ${giveawayChannel} started!`, ephemeral: true});
console.log(`✅ ${interaction.guild.name} Adlı sunucuda bir adet çekiliş başlatıldı!`) 
    talkedRecently.add(interaction.user.id);

setTimeout(() => {
  talkedRecently.delete(interaction.user.id)
}, 15000);
}
   }
}