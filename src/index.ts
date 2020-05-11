require("dotenv").config();
console.log('started');
import Client from './utils/classes/client'

const token = process.env.bwap;
const client = new Client();
let poop = new Map()


const { registerCommands, registerEvents} = require("./utils/register");

(async () => {
    await client.login(token);
    await registerCommands(client, "../commands", poop);
    await registerEvents(client, "../events");
})();


