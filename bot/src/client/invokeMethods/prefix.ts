import { Message, User } from 'discord.js';
import { Bot } from '$/client';
import BotInvokeChecker from '$/types/BotInvokeChecker';
import BotInvokeSanitizer from '$/types/BotInvokeSanitizer';

const checker: BotInvokeChecker = (message: Message, bot: Bot): boolean => {
  return message.content.startsWith(bot.settings.prefix);
}

const sanitizer: BotInvokeSanitizer = (message: Message, bot: Bot): [string, Message] => {
  return [
    message.content.replace(bot.settings.prefix, ''),
    message
  ];
};

export default {checker, sanitizer};