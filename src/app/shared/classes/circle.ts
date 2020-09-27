import {Figure} from './abstract/figure';
import {Coord} from '../interfaces/coord';

export class Circle extends Figure{
  private _radius: number;
  constructor(coord: Coord[], radius: number) {
    if (coord.length === 1 && radius > 0) {
      super(coord);
      this.radius = radius;
    } else {
      throw new Error('Invalid coord or radius value');
    }
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }
}
