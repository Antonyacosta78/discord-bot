import BotInvokeMappings from '$/types/BotInvokeMappings';

import Tag from './tag';
import Prefix from './prefix';

const invokeMethodsMapping: BotInvokeMappings = {
  'tag': Tag,
  'prefix': Prefix,
}

export default invokeMethodsMapping;