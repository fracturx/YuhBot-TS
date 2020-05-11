import path from "path";
const fs = require("fs").promises;
import BaseCommand from "./classes/BaseCommand";
import Client from './classes/client'
import BaseEvent from "./classes/BaseEvent";

async function registerCommands(client : Client, dir : string = "", map : Map<string, BaseCommand>) {
    const filePath = path.join(__dirname, dir);
    const files : Array<string> = await fs.readdir(filePath);
    for (const file of files) {
        
        const stat : typeof fs.stats = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerCommands(client, path.join(dir, file), map);
        if (file.endsWith(".js")) {
            const Command : any = require(path.join(filePath, file));
            if (Command.prototype instanceof BaseCommand) {
                const cmd = new Command();
                client.commands.set(cmd.name, cmd);
            }
        }
    }
}

async function registerEvents(client : Client, dir : string = "") {

    const filePath = path.join(__dirname, dir);
    const files : Array<string> = await fs.readdir(filePath);
    for (const file of files) {
        const stat : typeof fs.stats = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerEvents(client, path.join(dir, file));

        if (file.endsWith(".js")) {
            const Event : any = require(path.join(filePath, file));
            if (Event.prototype instanceof BaseEvent) {
                const event = new Event();
                client.on(event.name, event.run.bind(event, client));
            }
        }
    }
}



module.exports = { 
    registerCommands, 
    registerEvents,

  };