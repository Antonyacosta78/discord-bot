import { Message } from 'discord.js';
import { Bot } from '$/client';

type BotInvokeChecker = (message: Message, bot: Bot) => boolean;

export default BotInvokeChecker;
