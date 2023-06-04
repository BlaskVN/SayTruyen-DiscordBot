const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})


client.on('ready', () => {
    console.log('Bot da san sang')
})

client.on("messageCreate", message => {
    if (message.content === 'ping') {
        message.reply('Bạn ping là có ý gì?')
    }
})

client.login(process.env.TOKEN)