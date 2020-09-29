import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  commands: Subject<string> = new Subject();
  errorMessage: Subject<string> = new Subject();

  constructor() {
  }

  log(message: string): Subject<string> {
    this.commands.next(message);
    return this.commands;
  }

  error(errorMessage: string): Subject<string> {
    this.commands.next(errorMessage);
    return this.errorMessage;
  }
}
