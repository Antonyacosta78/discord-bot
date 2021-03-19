import Command from '$/types/Command';
import CommandContext from '$/types/CommandContext';
import { Message } from 'discord.js';

const HealthCheck: Command = {
  signature: { id: 'healthcheck' },
  handler({ t }: CommandContext, message: Message) {
    message.channel.send(
      t('GENERAL.HEALTHCHECK', { uptime: Math.floor(process.uptime()) })
    );
  }
  
};

export default HealthCheck;