import {Figure} from './abstract/figure';
import {Coord} from '../interfaces/coord';

export class Rectangle extends Figure{
  constructor(coord: Coord[]) {
    if (coord.length === 2) {
      super(coord);
    } else {
      throw new Error('Invalid coord size');
    }
  }
}
