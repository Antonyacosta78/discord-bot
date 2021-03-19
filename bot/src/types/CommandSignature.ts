import CommandContext from '$/types/CommandContext';
import CommandNamespace from '$/types/CommandNamespace';
import CommandArg from '$/types/CommandArg';

export default interface CommandSignature {
  namespace?: CommandNamespace | null;
  id: string;
  args?: Array<CommandArg | string>;
  guard?: (context: CommandContext) => boolean;
}