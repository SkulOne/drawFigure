import {Component, OnInit} from '@angular/core';
import {BaseShape} from './shared/interfaces/baseShape';
import {CommandService} from './shared/services/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'drawShapes';
  shapes: BaseShape[];

  constructor(private commandService: CommandService) {
  }

  ngOnInit(): void {
  }

  setFigures(query: string): void {
    this.shapes = this.commandService.getFigures(query);
  }
}
