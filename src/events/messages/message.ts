import BaseEvent from "../../utils/classes/BaseEvent";
import client from "../../utils/classes/client";
import { Message } from 'discord.js'

module.exports = class MessageEvent extends BaseEvent {
    constructor() {
        super('message')
    }

    async run(client : client, message : Message) {
        console.log("nice")
        console.log(message.content)
    }
}