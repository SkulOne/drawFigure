import {Figure} from './abstract/figure';
import {Coord} from '../interfaces/coord';

export class Ellipse extends Figure{
  private _radiuses: number[];
  constructor(coord: Coord[], radiuses: number[]) {
    // todo checking values
    if (coord.length === 1 && radiuses.length !== 2) {
      super(coord);
      this.radiuses = radiuses;
    } else {
      throw new Error('Invalid coord or radiuses size');
    }
  }

  get radiuses(): number[] {
    return this._radiuses;
  }

  set radiuses(value: number[]) {
    this._radiuses = value;
  }
}
