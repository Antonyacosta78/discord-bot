import BotInvokeMethodName from '$/types/BotInvokeMethodName';
import BotInvokeMethod from '$/types/BotInvokeMethod';

type BotInvokeMappings = { 
  [ K in BotInvokeMethodName ]: BotInvokeMethod
};

export default BotInvokeMappings;