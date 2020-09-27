import {Figure} from './abstract/figure';

export class Triangle extends Figure{
  constructor() {
    super();
  }

  draw(): SVGElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    const coords = this.coord.map(value => value.toString()).join(' ');
    element.setAttributeNS(null, 'points', coords);
    element.setAttributeNS(null, 'stroke-width', String(this.lineWight));
    element.setAttributeNS(null, 'stroke-dasharray', String(this.lineType));
    element.setAttributeNS(null, 'fill', String(this.backgroundColor));
    element.setAttributeNS(null, 'stroke', this.lineColor);
    return element;
  }
}
