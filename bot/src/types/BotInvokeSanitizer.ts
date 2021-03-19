import { Message } from 'discord.js';
import Bot from '$/client';

type BotInvokeSanitizer = (message: Message, bot: Bot) => [string, Message];

export default BotInvokeSanitizer;