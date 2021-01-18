const { MessageEmbed, Message } = require("discord.js");
const { Command, CommandoMessage } = require("discord.js-commando");
const getSounds = require("../../util/getSounds");

module.exports = class SoundsCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "play",
      group: "sound",
      memberName: "play",
      description: "Play a sound.",
      args: [
        {
          prompt: "Which sound do you want to play?",
          type: "string",
          oneOf: getSounds().map((s) => s.name),
          key: "sn",
        },
      ],
    });
  }

  /**
   * @param {CommandoMessage} msg
   */
  async run(msg, { sn }) {
    if (!msg.member.voice.channel) {
      return msg.reply("You should be in a voice channel!");
    }

    const sounds = getSounds();
    const sound = sounds.find((s) => s.name == sn);

    const connection = await msg.member.voice.channel.join();

    msg.react("✅");

    const dispatcher = connection.play(sound.path);

    dispatcher.on("close", () =>
      setTimeout(() => connection.disconnect(), 1000)
    );
  }
};
