import {Figure} from './abstract/figure';
import {Coord} from '../interfaces/coord';

export class Line extends Figure {

  constructor(coord: Coord[]) {
    if (coord.length === 2) {
      super(coord);
    } else {
      throw new Error('Invalid coord size');
    }
  }

  draw(): SVGLineElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    element.setAttributeNS(null, 'x1', this.coord[0][0]);
    element.setAttributeNS(null, 'y1', this.coord[0][1]);
    element.setAttributeNS(null, 'x2', this.coord[1][0]);
    element.setAttributeNS(null, 'y2', this.coord[1][1]);
    element.setAttributeNS(null, 'stroke', this.lineColor);
    element.setAttributeNS(null, 'stroke-width', String(this.lineWight));
    element.setAttributeNS(null, 'stroke-disharray', String(this.lineType));
    return element;
  }
}
