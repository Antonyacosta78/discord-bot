import CommandContext from '$/types/CommandContext';
import Command from '$/types/Command';
import BotSettings from '$/types/BotSettings';
import CommandDriver from '$/commands/CommandDriver';
import Bot from '$/client';
import bootTranslator from '$/lang'; 
import commands from '$/commands';
import settings from './bot.json';

async function startBot(): Promise<void> {
  const translator = await bootTranslator();
  

  const bot: Bot = new Bot(settings as BotSettings);
  const context: CommandContext = { bot, ...translator };
  const driver: CommandDriver = new CommandDriver(context);
  
  commands.forEach((command: Command) => {
    driver.command(command);
  });

  await bot.login(process.env.BOT_TOKEN); 
  console.log('Bot Online');
}


startBot()
  .catch((e: Error) => console.log(e));








