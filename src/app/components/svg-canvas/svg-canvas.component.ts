import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Shape} from '../../shared/interfaces/figure';
import {ShapeType} from '../../shared/enums/shape-type.enum';

@Component({
  selector: 'app-svg-canvas',
  templateUrl: './svg-canvas.component.html',
  styleUrls: ['./svg-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCanvasComponent implements OnInit {
  private _figures$: BehaviorSubject<Shape[]> = new BehaviorSubject(null);
  get figures$(): Observable<Shape[]> {
    return this._figures$.asObservable();
  }

  @Input() set figures(newShapes: Shape[]) {
    this.figures$.pipe(take(1)).subscribe({
      next: (prevShapes: Shape[]) => this._figures$.next(prevShapes ? [...prevShapes, ...newShapes] : newShapes)
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
  ShapeType = ShapeType;

  constructor() {
  }

  ngOnInit(): void {
  }

  clearCanvas(): void {
    this._figures$.next([]);
  }

  rect(coord1: number, coord2: number): number {
    return Math.abs(coord1 - coord2);
  }

}
