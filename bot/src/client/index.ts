import { Client, ClientOptions } from 'discord.js';
import { Observable, fromEvent } from 'rxjs';

import ClientEvent from '$/types/ClientEvent';
import BotSettings from '$/types/BotSettings';

export class Bot extends Client {
  constructor(public settings: BotSettings, clientOptions?: ClientOptions) {
    super(clientOptions);
  }

  event(eventName: ClientEvent): Observable<any> {
    return fromEvent(this, eventName);
  }

  get shouldReportNotFound(): boolean {
    return ['tag'].includes(this.settings.invokeMethod);
  }
}


export default Bot;

