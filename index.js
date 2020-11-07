require('dotenv').config()

const Discord = require('discord.js');
const { readdirSync } = require('fs')
const client = new Discord.Client();

// const cmdFiles = readdirSync('./commands/')
// const eventFiles = readdirSync('./commands/')
// console.log('log', `Carregando o total de ${cmdFiles.length} comandos.`)
// console.log('log', `Carregando o total de ${eventFiles.length} eventos.`)

// eventFiles.forEach(file => {
//     const eventName = file.split(".")[0];
//     console.log('log', `Carregando evento ${eventName}.`)
//     const event = new (require(`./events/${file}`))(client);
//     client.on(eventName, (...args) => event.run(...args));
//     // delete require.cache[require.resolve(`./events/${file}`)];
// })


client.on('ready', function (evt) {
    console.log('Bot Conectado');
    console.log(`Logado como: ${client.user.tag}`);
    console.log(`Iniciado com: ${client.users.cache.size} usuários`);
    console.log(`Está em: ${client.channels.cache.size} canais`);
    console.log(`Está em: ${client.guilds.cache.size} servidores`);

    var s = [
        // { name: "Messagem", type: 'STREAMING' },
        { name: "SUAS LÁGRIMAS", type: 'LISTENING', url: 'https://www.youtube.com/watch?v=gt6avb8vgMM' },
        { name: "CS ZADA", type: 'WATCHING', url: 'https://www.twitch.tv/smurfdomuca' },
        { name: "COUNTER STRIKE", type: 'PLAYING' },
    ];

    function st() {
        let rs = s[Math.floor(Math.random() * s.length)];
        client.user.setPresence({ activity: rs, status: 'online' });
    }
    st();
    setInterval(() => st(), 10000);
});

client.on('guildCreate', guild => {
    console.log(`O bot entrou no servidor: ${guild.name}`);
    console.log(`População: ${guild.memberCount} membros`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`);
});

client.on('guildDelete', guild => {
    console.log(`O bot foi removido do servidor: ${guild.name}`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`);
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Salve quebrada, ${member}`);
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(process.env.PREFIX)) return;


    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        console.log(`cmd > ${cmd} | args > ${args}`)

        var embedError = new Discord.MessageEmbed()
            .setTitle('❌ CALMA PORRA, deu erro aqui')
            .setColor(0xff0000)

        const embed = new Discord.MessageEmbed()
            .setColor(0xff0000)
            // .attachFiles(['assets/images/bobMosca.jpeg'])
            // .setImage('attachment://bobMosca.jpeg')
            .setTimestamp()
            .setFooter('Space Code Produções')


        if (cmd === 'teste') {
            embed.setTitle('Testado com sucesso irmão')
            message.channel.send(embed)
        }
        if (cmd === 'salve') {
            embed.setTitle(`Eae ${message.author.username}, ta salvado!`)
            message.channel.send(embed)
        }

        if (cmd === 'brunao') {
            embed.setTitle(`Vish, fala desse ai não`)
            message.channel.send(embed)
        }

        if (cmd === 'cadebrunao') {
            embed.setTitle(`Nunca vi nem comi, eu só ouço falar`)
            message.channel.send(embed)
        }
        if (cmd === 'cadevacare') {
            embed.setTitle(`O tal do sacudo?`)
            message.channel.send(embed)
        }
        if (cmd === 'cadepizzini') {
            embed.setTitle(`Ta lá na Itália`)
            message.channel.send(embed)
        }
        if (cmd === 'cadecarmelim') {
            embed.setTitle(`Praticando esgrima`)
            message.channel.send(embed)
        }
        if (cmd === 'cadeborges') {
            embed.setTitle(`Ainda não sei`)
            message.channel.send(embed)
        }
    } catch (error) {
        message.channel.send(embedError);
        console.log(error);
    }

});

client.login(process.env.AUTH_TOKEN);



