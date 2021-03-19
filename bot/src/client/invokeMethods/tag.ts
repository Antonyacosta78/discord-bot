import { Message, User } from 'discord.js';
import { Bot } from '$/client';
import BotInvokeChecker from '$/types/BotInvokeChecker';
import BotInvokeSanitizer from '$/types/BotInvokeSanitizer';

const checker: BotInvokeChecker = (message: Message, bot: Bot): boolean => {
  const isBotTag = (tagged: User) => !!bot.user?.equals(tagged);
  return message.mentions.users.some(isBotTag);
}

const sanitizer: BotInvokeSanitizer = (message: Message, bot?: Bot): [string, Message] => {
  // TODO: better way to remove tagMethod from message content
  const botTagText = `<@!${bot?.user?.id}>`;

  return [
    message.content.replace(botTagText, '').trim(), 
    message
  ];
};

export default {checker, sanitizer};