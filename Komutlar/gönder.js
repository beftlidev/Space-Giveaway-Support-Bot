const Discord = require('discord.js');

const {MessageActionRow, MessageButton} = require("discord.js") 

const db = require('croxydb') 

module.exports = {

  name: "gönder", 

  options: [       {          

            name: 'user',

            description: 'Kimse coin göndermek istiyorsun?',

            type: 'USER',

            required: true

       },        {          

            name: 'coin',

            description: 'Kaç coin göndermek istiyorsun?',

            type: 'STRING',

            choices: [ {name: '5.000 coin', value: '5000'}, {name: '10.000 coin', value: '10000'}, {name: '25.000 coin', value: '25000'}, {name: '50.000 coin', value: '50000'}, {name: '100.000 coin', value: '100000'}, {name: '200.000 coin', value: '200000'}, {name: '350.000 coin', value: '350000'}, {name: '400.000 coin', value: '400000'}, {name: '450.000 coin', value: '450000'}, {name: '500.000 coin', value: '500000'} ], 

            required: true

        }], 

    description: 'İstediğiniz birine coin transfer edersiniz.',

    run: async (client, interaction) => {

const user = interaction.options.getUser('user') 

var values = interaction.options._hoistedOptions.map(a => a.value)

var coin = values[1]

let coins = await client.coin.fetch(`coin_${interaction.user.id}`)

if(!coins) {

interaction.reply(`<:sgs_error:921392927568195645> En az ${coin} coin\' in olması lazım!`) 

} 

if(coin > coins) {

interaction.reply(`<:sgs_error:921392927568195645> En az ${coin} coin\' in olması lazım!`)  

} 

await client.coin.add(`coin_${user.id}`, coin) 

await client.coin.substr(`coin_${interaction.user.id}`, coin) 

interaction.reply(`<:sgs_tick:921392926683197460> Başarı ile ${user} (\`${user.tag}\`) adlı kişiye ${coin} coin gönderdin!`) 

}

}