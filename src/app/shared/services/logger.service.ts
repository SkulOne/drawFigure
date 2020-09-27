import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  commands: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  log(message: string): BehaviorSubject<string> {
    this.commands.next(message);
    return this.commands;
  }
}
