import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommandService} from '../../shared/services/command.service';
import {Figure} from '../../shared/classes/abstract/figure';
import {LoggerService} from '../../shared/services/logger.service';


@Component({
  selector: 'app-figure-input',
  templateUrl: './figure-input.component.html',
  styleUrls: ['./figure-input.component.scss']
})
export class FigureInputComponent implements OnInit {
  @Output() figureEnter = new EventEmitter<Figure[]>();
  figureCommand: string;

  constructor(private commandService: CommandService, private logger: LoggerService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.figureEnter.emit(this.commandService.parseCommand(this.figureCommand));
    this.logger.log(this.figureCommand);
  }
}
