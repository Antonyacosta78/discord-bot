import { Message } from 'discord.js';
import CommandContext from '$/types/CommandContext';
import InputCommand from '$/types/InputCommand';

type CommandHandler = (context: CommandContext , message: Message, command: InputCommand) => Promise<void> | void;

export default CommandHandler