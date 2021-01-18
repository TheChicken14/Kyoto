import { CommandoClient, CommandoClientOptions} from "discord.js-commando";

export class KyotoClient extends CommandoClient{
    constructor(options: CommandoClientOptions) {
        super(options)
    }
}