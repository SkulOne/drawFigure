import {Coord} from '../interfaces/coord';
import {Figure} from './abstract/figure';

export class Triangle extends Figure{
  constructor(coord: Coord[]) {
    if (coord.length === 3) {
      super(coord);
    } else {
      throw new Error('Invalid coord size');
    }
  }
}
