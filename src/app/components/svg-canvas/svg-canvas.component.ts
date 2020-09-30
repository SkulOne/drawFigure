import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Shape} from '../../shared/interfaces/baseShape';
import {ShapeType} from '../../shared/enums/shape-type.enum';

@Component({
  selector: 'app-svg-canvas',
  templateUrl: './svg-canvas.component.html',
  styleUrls: ['./svg-canvas.component.scss'],
})
export class SvgCanvasComponent implements OnInit {
  private _shapes$: BehaviorSubject<Shape[]> = new BehaviorSubject(null);
  get shapes$(): Observable<Shape[]> {
    return this._shapes$.asObservable();
  }
  @Input() set shapes(newShapes: Shape[]) {
    console.log(newShapes);
    this.shapes$.pipe(take(1)).subscribe({
      next: (prevShapes: Shape[]) => this._shapes$.next(prevShapes ? [...prevShapes, ...newShapes] : newShapes)
    });
  }

  color: string;
  ShapeType = ShapeType;

  constructor() {
  }

  ngOnInit(): void {
  }

  clearCanvas(): void {
    this._shapes$.next([]);
  }
}
