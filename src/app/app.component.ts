import {Component, OnInit} from '@angular/core';
import {Figure} from './shared/interfaces/figure';
import {CommandService} from './shared/services/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'drawFigures';
  figures: Figure[];

  constructor(private commandService: CommandService) {
  }

  ngOnInit(): void {
  }

  setFigures(query: string): void {
    this.figures = this.commandService.getFigures(query);
  }
}
