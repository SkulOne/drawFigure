import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Figure} from '../../shared/classes/abstract/figure';
import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-svg-canvas',
  templateUrl: './svg-canvas.component.html',
  styleUrls: ['./svg-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCanvasComponent implements OnInit {
  private _figures$: BehaviorSubject<Figure[]> = new BehaviorSubject(null);
  get figures$(): Observable<Figure[]> {
    return this._figures$.asObservable();
  }

  @Input() set figures(newShapes: Figure[]) {
    console.log(newShapes);
    this.figures$.pipe(take(1)).subscribe({
      next: (prevShapes: Figure[]) => this._figures$.next(prevShapes ? [...prevShapes, ...newShapes] : newShapes)
    });
  }

  // // for vanilla version
  // @Input() set figures(figures: Figure[]) {
  //   figures.forEach((figure) => {
  //     const element = figure.draw();
  //     this.svg.nativeElement.appendChild(element);
  //   });
  // }

  @ViewChild('svg') svg: ElementRef;
  color: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  clearCanvas(): void {
    this._figures$.next([]);

    // for vanilla version
    // this.svg.nativeElement.innerHTML = '';
  }

  getShapeType(shape: Figure): string {
    return shape.constructor.name;
  }

  rect(coord1: number, coord2: number): number {
    console.log(Math.abs(coord1 - coord2));
    return Math.abs(coord1 - coord2);
  }

}
