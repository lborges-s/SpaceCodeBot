module.exports = (client) => {
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
}