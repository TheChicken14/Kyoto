const { MessageEmbed } = require("discord.js");
const { Command, CommandoMessage } = require("discord.js-commando");
const getSounds = require("../../util/getSounds");
const { default: axios } = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = class SoundsCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "upload",
      group: "admin",
      memberName: "upload",
      description: "Upload a sound.",
      ownerOnly: true,
    });
  }

  /**
   * @param {CommandoMessage} msg
   */
  async run(msg) {
    const attachment = msg.attachments.first();

    if (!attachment) {
      return msg.reply("You should attach the sound you want to upload!");
    }

    if (
      !attachment.name.toLowerCase().endsWith(".mp3") &&
      !attachment.name.toLowerCase().endsWith(".mp4")
    ) {
      return msg.reply("You can only upload `.mp3` and `.mp4` files.");
    }

    const pipe = fs.createWriteStream(
      path.join(__dirname, "..", "..", "..", "sounds", attachment.name)
    );

    const response = await axios({
      url: attachment.proxyURL,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(pipe);

    pipe.on("finish", () => msg.reply("DONE!"));
  }
};
