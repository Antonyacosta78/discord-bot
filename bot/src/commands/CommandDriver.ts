import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Message } from 'discord.js';

import Command from '$/types/Command';
import CommandContext from '$/types/CommandContext';
import BotInvokeMethod from '$/types/BotInvokeMethod';
import InputCommand from '$/types/InputCommand';
import InvokeMappings from '$/client/invokeMethods';
import ParseCommand from '$/parsers/CommandParser';
import CommandArg from '$/types/CommandArg';


export default class CommandDriver {
  private _commands: Command[] = [];
  private _subscriptions$: Subscription[] = [];
  private _invokeMethod: BotInvokeMethod;

  public context: CommandContext;

  constructor(context: CommandContext) {
    this.context = context;
    this._invokeMethod = InvokeMappings[this.context.bot.settings.invokeMethod];
    this._attachListenerForCommands();
  }

  _attachListenerForCommands() {

    const wasInvoked = (m: Message) => this._invokeMethod
      .checker(m, this.context.bot);
    
    const sanitize = (m: Message) => this._invokeMethod
      .sanitizer(m, this.context.bot);

    const toCommand = ([commandString, message]: [string, Message]): [InputCommand, Message] => [
      //TODO: Handle error thrown by ParseCommand as commandSyntaxError and ignore
      ParseCommand(commandString), message
    ];

    const commandExists = ([command]: [InputCommand, Message]): boolean => 
      this._commands.some((c: Command) => this.commandMatches(c, command));
      

    const CommandObsevable$ = this.context.bot
      .event('message')
      .pipe(
        //filter if bot was invoked
        filter(wasInvoked),
        //remove invoking part from string
        map(sanitize),
        //filter if is command matching with parser
        map(toCommand),
      );

    const successfulHandler = CommandObsevable$
      .pipe(
        filter(commandExists),
        map((comm) => this.findCommand(comm))
      ) 
      .subscribe(
        ([command, message, inputCommand]: [Command, Message, InputCommand]) => 
          command.handler(this.context, message, inputCommand)
      );
   
    const notFoundHandler = CommandObsevable$
      .pipe(
        filter((args) => !commandExists(args))
      )
      .subscribe((message) => this.handleCommandNotFound(message));
      
    this._subscriptions$.push(successfulHandler, notFoundHandler);
  }

  handleCommandNotFound([inCommand, message]: [InputCommand, Message]) {
    if(!this.context.bot.shouldReportNotFound) return;

    const command = inCommand.namespace 
      ? `${inCommand.namespace}:${inCommand.command}` 
      : inCommand.command;
    
    message.channel.send(this.context.t('GENERAL.COMMAND_NOT_FOUND', { command }));
  }

  commandMatches(baseCommand: Command, inputCommand: InputCommand): boolean {

    const isRequired = (x: string | CommandArg) => typeof x === 'object' && x.required;

    const matchesId = baseCommand.signature.id === inputCommand.command;
    const matchesArgLength = 
      (!baseCommand.signature.args && 0 === inputCommand.args.length) ||
      (baseCommand.signature.args && baseCommand.signature.args?.filter(isRequired).length <= inputCommand.args.length)

    return !!(matchesId && matchesArgLength);

  }


  findCommand([command, message]: [InputCommand, Message]): [Command, Message, InputCommand] {
    const commandFound = this._commands.find((c: Command) => this.commandMatches(c, command));
    if(!commandFound) { 
     throw new Error('Command not found');
    }
    return [ commandFound, message, command ];
  }

  command(command: Command): void {
    // TODO? Validate commands

    // rules = 
    // there can not be any required args after a non required arg

    
    // commands id must be an alphanumerical word (by grammar definition)
    // commands namespace must be an alphanumerical word (by grammar definition)
    this._commands.push(command);
  }

}