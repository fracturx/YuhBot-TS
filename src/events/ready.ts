import BaseEvent from "../utils/classes/BaseEvent";
import client from "../utils/classes/client";

export default class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready')
    }

    async run(client : client) {
        console.log("nice")
    }
}