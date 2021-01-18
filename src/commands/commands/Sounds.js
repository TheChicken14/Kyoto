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

    console.log(sounds);
    return msg.reply("hi");
  }
};
