import {KyotoClient} from "./structures/KyotoClient";
import config from "../config.json"
import path from "path";

const client = new KyotoClient({
    commandPrefix: config.prefix,
    owner: config.owners,
    invite: "https://discord.gg/4s4QUbQ"
})

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['sound', 'Sounds'],
        ['commands', 'Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
	console.log(`Logged in as ${client.user!.tag}! (${client.user!.id})`);
	client.user!.setActivity('with Commando');
});

client.login(config.token)