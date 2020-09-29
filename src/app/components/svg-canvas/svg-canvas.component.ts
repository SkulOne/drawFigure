import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Figure} from '../../shared/classes/abstract/figure';

@Component({
  selector: 'app-svg-canvas',
  templateUrl: './svg-canvas.component.html',
  styleUrls: ['./svg-canvas.component.scss']
})
export class SvgCanvasComponent implements OnInit, OnChanges {
  @Input() figures: Figure[];
  @ViewChild('svg') svg;
  color: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.figures) {
      this.figures.forEach((figure) => {
        const element = figure.draw();
        this.svg.nativeElement.appendChild(element);
      });
    }
  }
}
