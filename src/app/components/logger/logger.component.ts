import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../../shared/services/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {
  message: string[] = [];
  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.commands.subscribe((message) => {
      this.message.unshift(message);
    });
  }

}
