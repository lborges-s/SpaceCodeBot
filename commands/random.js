const Discord = require("discord.js");

module.exports = {
  /**
   *
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {*} args
   */
  run: function (client, message, args) {
    const members = ["Carmelim", "Vacare", "Brunão", "Pizzini", "Borges"];

    const sortudo = Math.floor(Math.random() * members.length);

    const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setFooter("©Space Code");

    const empty = "";

    for (let index = 0; index < members.length; index++) {
      const element = members[index];
      embed.fields.push({
        name: `**${index + 1}: ${element}**`,
        value: index == sortudo ? "**GRANDE SORTUDO KKK**" : "...",
      });
    }

    message.reply(embed);
  },

  conf: {},

  get help() {
    return {
      name: "random",
      category: "Utilidade",
      description: "Sorteia um integrante do grupo da facul.",
      usage: "random",
    };
  },
};
