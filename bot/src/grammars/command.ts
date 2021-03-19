// Generated automatically by nearley, version 2.19.7
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
 const join = ([letters]: Array<string[]>): string => letters.join(''); 
 const quotedSentence = ([q1, sentenceArray, q2]: string[]): string => sentenceArray; 
interface NearleyToken {  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: NearleyToken) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    {'name': 'command$ebnf$1', 'symbols': ['namespace'], 'postprocess': id},
    {'name': 'command$ebnf$1', 'symbols': [], 'postprocess': () => null},
    {'name': 'command$ebnf$2', 'symbols': []},
    {'name': 'command$ebnf$2', 'symbols': ['command$ebnf$2', 'argument'], 'postprocess': (d) => d[0].concat([d[1]])},
    {'name': 'command', 'symbols': ['command$ebnf$1', 'signature', 'command$ebnf$2'], 'postprocess': ([ns, command, args]) => ({ns, command, args })},
    {'name': 'namespace$macrocall$2', 'symbols': ['alphanumeric']},
    {'name': 'namespace$macrocall$1$ebnf$1', 'symbols': ['namespace$macrocall$2']},
    {'name': 'namespace$macrocall$1$ebnf$1', 'symbols': ['namespace$macrocall$1$ebnf$1', 'namespace$macrocall$2'], 'postprocess': (d) => d[0].concat([d[1]])},
    {'name': 'namespace$macrocall$1', 'symbols': ['namespace$macrocall$1$ebnf$1'], 'postprocess': join},
    {'name': 'namespace', 'symbols': ['namespace$macrocall$1', {'literal':':'}], 'postprocess': id},
    {'name': 'signature$macrocall$2', 'symbols': ['alphanumeric']},
    {'name': 'signature$macrocall$1$ebnf$1', 'symbols': ['signature$macrocall$2']},
    {'name': 'signature$macrocall$1$ebnf$1', 'symbols': ['signature$macrocall$1$ebnf$1', 'signature$macrocall$2'], 'postprocess': (d) => d[0].concat([d[1]])},
    {'name': 'signature$macrocall$1', 'symbols': ['signature$macrocall$1$ebnf$1'], 'postprocess': join},
    {'name': 'signature', 'symbols': ['signature$macrocall$1'], 'postprocess': id},
    {'name': 'argument$subexpression$1$macrocall$2', 'symbols': ['alphnumsym']},
    {'name': 'argument$subexpression$1$macrocall$1$ebnf$1', 'symbols': ['argument$subexpression$1$macrocall$2']},
    {'name': 'argument$subexpression$1$macrocall$1$ebnf$1', 'symbols': ['argument$subexpression$1$macrocall$1$ebnf$1', 'argument$subexpression$1$macrocall$2'], 'postprocess': (d) => d[0].concat([d[1]])},
    {'name': 'argument$subexpression$1$macrocall$1', 'symbols': ['argument$subexpression$1$macrocall$1$ebnf$1'], 'postprocess': join},
    {'name': 'argument$subexpression$1', 'symbols': ['argument$subexpression$1$macrocall$1'], 'postprocess': id},
    {'name': 'argument$subexpression$1', 'symbols': ['dqsentence'], 'postprocess': id},
    {'name': 'argument', 'symbols': ['__', 'argument$subexpression$1'], 'postprocess': ([_, x]) => x},
    {'name': 'dqsentence$macrocall$2', 'symbols': ['alphnumsymws']},
    {'name': 'dqsentence$macrocall$1$ebnf$1', 'symbols': ['dqsentence$macrocall$2']},
    {'name': 'dqsentence$macrocall$1$ebnf$1', 'symbols': ['dqsentence$macrocall$1$ebnf$1', 'dqsentence$macrocall$2'], 'postprocess': (d) => d[0].concat([d[1]])},
    {'name': 'dqsentence$macrocall$1', 'symbols': ['dqsentence$macrocall$1$ebnf$1'], 'postprocess': join},
    {'name': 'dqsentence', 'symbols': [{'literal':'"'}, 'dqsentence$macrocall$1', {'literal':'"'}], 'postprocess': (m) => m[1]},
    {'name': 'alphnumsymws', 'symbols': ['alphanumeric']},
    {'name': 'alphnumsymws', 'symbols': ['symbol']},
    {'name': 'alphnumsymws', 'symbols': ['__'], 'postprocess': id},
    {'name': 'alphnumsym', 'symbols': ['alphanumeric']},
    {'name': 'alphnumsym', 'symbols': ['symbol'], 'postprocess': id},
    {'name': 'alphanumeric', 'symbols': [/[a-zA-Z0-9]/], 'postprocess': id},
    {'name': 'symbol', 'symbols': [/[<>,.\\\/?#$%^&*+=@!'~\-:;|_]/], 'postprocess': id},
    {'name': '__', 'symbols': [{'literal':' '}]}
  ],
  ParserStart: 'command',
};

export default grammar;
