import {Figure} from './abstract/figure';

export class Line extends Figure {

  constructor() {
    super();
  }

  draw(): SVGLineElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    element.setAttributeNS(null, 'x1', String(this.coord[0][0]));
    element.setAttributeNS(null, 'y1', String(this.coord[0][1]));
    element.setAttributeNS(null, 'x2', String(this.coord[1][0]));
    element.setAttributeNS(null, 'y2', String(this.coord[1][1]));
    element.setAttributeNS(null, 'stroke', this.lineColor);
    element.setAttributeNS(null, 'stroke-width', String(this.lineWight));
    element.setAttributeNS(null, 'stroke-dasharray', String(this.lineType));
    return element;
  }
}
