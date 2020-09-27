import {Figure} from './abstract/figure';

export class Rectangle extends Figure{
  constructor() {
    super();
  }

  draw(): SVGElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    element.setAttributeNS(null, 'x', String(this.coord[0][0]));
    element.setAttributeNS(null, 'y', String(this.coord[0][1]));
    element.setAttributeNS(null, 'width', String(Math.abs(this.coord[0][0] - this.coord[1][0])));
    element.setAttributeNS(null, 'height', String(Math.abs(this.coord[0][1] - this.coord[1][1])));
    element.setAttributeNS(null, 'stroke-width', String(this.lineWight));
    element.setAttributeNS(null, 'stroke-dasharray', String(this.lineType));
    element.setAttributeNS(null, 'stroke', this.lineColor);
    element.setAttributeNS(null, 'fill', String(this.backgroundColor));
    return element;
  }
}
