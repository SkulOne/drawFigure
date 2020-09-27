import {Figure} from './abstract/figure';

export class Circle extends Figure{
  private _radius?: number;
  constructor(radius: number = 0) {
    super();
    this.radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  draw(): SVGElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    element.setAttributeNS(null, 'cx', String(this.coord[0][0]));
    element.setAttributeNS(null, 'cy', String(this.coord[0][1]));
    element.setAttributeNS(null, 'r', String(this.radius));
    element.setAttributeNS(null, 'stroke', this.lineColor);
    element.setAttributeNS(null, 'stroke-width', String(this.lineWight));
    element.setAttributeNS(null, 'stroke-dasharray', String(this.lineType));
    element.setAttributeNS(null, 'fill', String(this.backgroundColor));
    return element;
  }
}
