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

}
