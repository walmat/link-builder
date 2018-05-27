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

    switch(message.channel.name) {
        case "link-builder": {
            if(command === "build") {

                //clear the command
                const fetched = await message.channel.fetchMessages({count: 1});
                message.delete(fetched)
                    .catch(error => message.send(`Couldn't delete messages because of: ${error}`));

                args.forEach(link => {

                    link_builder.build(link, userAgent, (err, title, links, img, color) => {

                        message.channel.send(msg(title, links, img, color));
                    });

                });
            }
            break;
        }
    }
});

function msg(title, links, img, color) {

    if (img === null) img = 'https://cdn.discordapp.com/embed/avatars/0.png';

    return new Discord.RichEmbed()
        .setAuthor(title)
        .setDescription(links)
        .setThumbnail(img.toString())
        .setTimestamp(new Date().toISOString())
        .setColor(color)
        .setFooter('announceus.io', 'https://thumb.ibb.co/gVoAqo/h5_G8_R3o_Z_400x400.jpg%27');
}

client.login(config.token);