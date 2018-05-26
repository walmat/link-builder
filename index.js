const Discord = require("discord.js");
const path = require('path');
const client = new Discord.Client();
const config = require(path.join(__dirname, "config.json"));
const link_builder = require('./link-builder');
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3107.4 Safari/537.36';

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
    if(message.author.bot || message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "build") {
        args.forEach(link => {

            link_builder.build(link, userAgent, (err, title, links, color) => {

                message.channel.send(msg(title, links, color));
            });

        });
    }
});

function msg(title, links, color) {
    return new Discord.RichEmbed()
        .setAuthor(title)
        .setDescription(links)
        .setTimestamp(new Date().toISOString())
        .setColor(color)
        .setFooter('Nebula © 2018', 'https://cdn.discordapp.com/embed/avatars/0.png');
}

client.login(config.token);