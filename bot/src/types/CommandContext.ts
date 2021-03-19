import { Bot } from '$/client';
import i18next, { i18n, TFunction } from 'i18next';

export default interface CommandContext {
  bot: Bot;
  i18next: i18n;
  t: TFunction;
}
