require("dotenv").config();

const Discord = require("discord.js");
const { readdirSync } = require("fs");
const Enmap = require("enmap");
const client = new Discord.Client();

client.commands = new Discord.Collection(); //new Enmap();
client.startTime = Date.now();

const cmdFiles = readdirSync("./commands/");
console.log("log", `Carregando o total de ${cmdFiles.length} comandos.`);
cmdFiles.forEach((f) => {
  try {
    const props = require(`./commands/${f}`);
    if (f.split(".").slice(-1)[0] !== "js") return;

    console.log("log", `Carregando comando: ${props.help.name}`);

    if (props.init) props.init(client);

    client.commands.set(props.help.name, props);
    if (props.help.aliases) {
      props.alias = true;
      props.help.aliases.forEach((alias) => client.commands.set(alias, props));
    }
  } catch (e) {
    console.log(`Impossivel executar comando ${f}: ${e}`);
  }
});

const eventFiles = readdirSync("./events/");
console.log("log", `Carregando o total de ${eventFiles.length} eventos.`);

// eventFiles.forEach(file => {
//     const eventName = file.split(".")[0];
//     console.log('log', `Carregando evento ${eventName}.`)
//     const event = new (require(`./events/${file}`))(client);
//     client.on(eventName, (...args) => event.run(...args));
//     // delete require.cache[require.resolve(`./events/${file}`)];
// })

eventFiles.forEach((f) => {
  const eventName = f.split(".")[0];
  const event = require(`./events/${f}`);

  client.on(eventName, event.bind(null, client));
});

client.login(process.env.AUTH_TOKEN);
