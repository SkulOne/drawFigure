import {Circle} from './circle';

export class Ellipse extends Circle{
  private _radius2?: number;


  constructor(radius: number= 0, radius2: number= 0) {
    super();
    this.radius2 = radius2;
  }

  get radius2(): number {
    return this._radius2;
  }

  set radius2(value: number) {
    this._radius2 = value;
  }

}
