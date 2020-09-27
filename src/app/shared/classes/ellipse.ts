import {Figure} from './abstract/figure';

export class Ellipse extends Figure{
  private _radius?: number;
  private _radius2?: number;


  constructor(radius: number= 0, radius2: number= 0) {
    super();
    this.radius = radius;
    this.radius2 = radius2;
  }


  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get radius2(): number {
    return this._radius2;
  }

  set radius2(value: number) {
    this._radius2 = value;
  }

  draw(): SVGElement {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    element.setAttributeNS(null, 'cx', String(this.coord[0][0]));
    element.setAttributeNS(null, 'cy', String(this.coord[0][1]));
    element.setAttributeNS(null, 'rx', String(this.radius));
    element.setAttributeNS(null, 'ry', String(this.radius2));
    element.setAttributeNS(null, 'stroke', this.lineColor);
    element.setAttributeNS(null, 'stroke-width', String(this.lineWight));
    element.setAttributeNS(null, 'stroke-dasharray', String(this.lineType));
    element.setAttributeNS(null, 'fill', String(this.backgroundColor));
    return element;
  }
}
