import CommandHandler from '$/types/CommandHandler';
import CommandSignature from '$/types/CommandSignature';

export default interface Command {
  signature: CommandSignature;
  handler: CommandHandler 
}