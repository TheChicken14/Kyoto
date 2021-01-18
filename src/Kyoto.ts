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
        ['sound', 'Sounds']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))