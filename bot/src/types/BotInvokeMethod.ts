import BotInvokeChecker from '$/types/BotInvokeChecker';
import BotInvokeSanitizer from '$/types/BotInvokeSanitizer';

type BotInvokeMethod = { 
  sanitizer: BotInvokeSanitizer,
  checker: BotInvokeChecker 
};

export default BotInvokeMethod