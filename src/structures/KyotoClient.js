const {
  CommandoClient,
  CommandoClientOptions,
} = require("discord.js-commando");

class KyotoClient extends CommandoClient {
  constructor(options) {
    super(options);
  }
}

module.exports = KyotoClient;
