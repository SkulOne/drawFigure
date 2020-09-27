import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Figure} from '../../shared/classes/abstract/figure';

@Component({
  selector: 'app-svg-canvas',
  templateUrl: './svg-canvas.component.html',
  styleUrls: ['./svg-canvas.component.scss']
})
export class SvgCanvasComponent implements OnInit, OnChanges {
  @Input() figures: Figure[];
  @ViewChild('svg') svg;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.figures) {
      this.figures.forEach((figure) => {
        this.svg.nativeElement.appendChild(figure.draw());
        console.log(figure.draw());
      });
    }
  }
}
