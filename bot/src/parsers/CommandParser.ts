import { Parser, Grammar } from 'nearley';
import InputCommand from '$/types/InputCommand';
import CommandGrammar from '$/grammars/command';

const grammar: Grammar = Grammar.fromCompiled(CommandGrammar);

// todo: properly type arg and return function
export default function parseCommand(command: string): InputCommand {
  try {
    const parser = new Parser(grammar);
    parser.feed(command);
    return parser.results[0];
  } catch (error) {
    // TODO: Throw specific error if cannot match command
    throw error;
  }
}
