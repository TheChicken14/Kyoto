const { MessageEmbed } = require("discord.js");
const { Command, CommandoMessage } = require("discord.js-commando");
const getSounds = require("../../util/getSounds");

module.exports = class SoundsCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "sounds",
      group: "commands",
      memberName: "sounds",
      description: "Shows all available sounds.",
      guarded: true,
    });
  }

  /**
   * @param {CommandoMessage} msg
   */
  run(msg) {
    const sounds = getSounds();

    const soundsMap = sounds
      .map((s, i) => `**${i + 1}**. ${s.name}`)
      .join("\n");

    const embed = new MessageEmbed()
      .setTitle("Sounds")
      .setColor("RANDOM")
      .setDescription(`These are my sounds: \n\n ${soundsMap}`);

    msg.embed(embed);
  }
};
