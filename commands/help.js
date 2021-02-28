module.exports = {
  run: (client, message, args) => {
    /** Objeto embed que irá ser enviado. */
    const embed = {
      color: 0xb1103c,
      title: "Minha lista de comandos",
      description:
        "[Clique aqui para ir até o repositório onde estou =)](https://github.com/lborges-s/SpaceCodeBot)",
      timestamp: new Date(),
      footer: {
        text: "2020 ®Space Code",
      },
      fields: [],
    };

    let commands = client.commands;

    if (
      message.member === null ||
      !message.member.hasPermission("ADMINISTRATOR")
    )
      commands = commands.filter((c) => !c.help.admin);

    commands.forEach((command) => {
      if (command.alias) return;
      embed.fields.push({
        name: `**${process.env.PREFIX}${command.help.name}**`,
        value: `*Descrição*: ${command.help.description}
          *Categoria*: ${command.help.category}\n`,
      });
    });

    message.channel
      .send({
        embed: embed,
      })
      .then(() => message.react("⚡"))
      .catch(() =>
        message.reply("Eu não tenho permissões para enviar DM para você 😥")
      );
  },

  conf: {},

  help: {
    name: "help",
    category: "Ajuda",
    description: "Mostra todos os comandos disponíveis do bot.",
    usage: "help",
  },
};
