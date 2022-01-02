const Discord = require('discord.js');

const db = require("croxydb") 

module.exports = { 

  name: "eval", 

  options: [

{          

  name: 'kod',

            description: 'WoaW',

            type: 'STRING',

            required: true

        }

], 

    description: 'Cheesey özel!',

    run: async (client, interaction) => {

   const u = interaction.options.getString('kod');

 

    if(interaction.user.id != "753842258457002036") return interaction.reply("**Bu komutu sadece sahibim kullanabilir!!**")

 

    try {

  let evaled = eval(u)

let embed = new Discord.MessageEmbed() 

 .setDescription(`Kod başarı ile çalıştı! :partying_face:
\`\`\`js\nKod:
${u} 
\`\`\`
\`\`\`js\nÇıktı:
${evaled}
\`\`\`
`)

interaction.reply({embeds: [embed], ephemeral: true} ) 

    } catch(err) {

      interaction.reply("\`\`\`js\nKod:\n" + u + "\n\`\`\`" + "\`\`\`\nHata:\n" + err + "\n\`\`\`")

    }

}

} 