import { Client, ClientOptions} from 'discord.js';
const BaseCommand = require('./BaseCommand')

export default class extends Client {

  public commands!: Map<string, typeof BaseCommand>

}