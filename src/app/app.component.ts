import {Component, OnInit, ViewChild} from '@angular/core';
import {Figure} from './shared/classes/abstract/figure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'drawFigures';
  figures: Figure[];

  constructor() {
  }

  ngOnInit(): void {
  }

  setFigures(event: Figure[]): void {
    this.figures = event;
  }
}
