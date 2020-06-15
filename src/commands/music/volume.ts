import BaseCommand from "../../utils/classes/BaseCommand";
import { Message } from "discord.js";
import Client from '../../utils/classes/client'

module.exports = 
  class VolumeCommand extends BaseCommand {
    constructor() {
      super("volume", "music")
    }

    async run(client: Client, message: Message, args: Array<string>) {
      const vol = args[0] || 100
      const player = client.music.players.get(message.guild!.id)

      if (player) {
        const channel = message.member?.voice.channel;
            if (player && channel) {
              player.setVolume(+vol)
            }
                
      }
    }
  }
