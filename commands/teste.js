const Discord = require("discord.js");

module.exports = {
  /**
   *
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {*} args
   */
  run: function (client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setFooter("©Space Code")
      .setTitle("Testado com sucesso irmão");

    message.reply(embed);
  },

  conf: {},

  get help() {
    return {
      name: "teste",
      category: "Info",
      description: "Testa a conexão do bot.",
      usage: "teste",
    };
  },
};
