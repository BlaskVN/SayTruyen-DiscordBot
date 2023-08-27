const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})
const token = process.env['token']
const dotenv = require("dotenv").config()

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Bot Started!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

client.on('ready', () => {
    console.log('Bot da san sang')
})

client.on("messageCreate", message => {
    if (message.content === 'ping') {
        message.reply('Ping củ l')
    }
})

client.login(token)