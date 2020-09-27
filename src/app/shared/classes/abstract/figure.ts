import {LineType} from '../../enums/line-type.enum';

export abstract class Figure {
  private _coord?: number[][];
  private _lineColor?: string;
  private _backgroundColor?: string;
  private _lineWight?: number;
  private _lineType?: LineType;


  protected constructor(coord: number[][] = [[0, 0], [0, 0]],
                        lineColor: string = 'black',
                        backgroundColor: string = 'white',
                        lineWight: number = 1,
                        lineType: LineType = LineType.Solid) {
    this._coord = coord;
    this._lineColor = lineColor;
    this._backgroundColor = backgroundColor;
    this._lineWight = lineWight;
    this._lineType = lineType;
  }

  get coord(): number[][] {
    return this._coord;
  }

  set coord(value: number[][]) {
    this._coord = value;
  }

  get lineColor(): string {
    return this._lineColor;
  }

  set lineColor(value: string) {
    this._lineColor = value;
  }

  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  get lineWight(): number {
    return this._lineWight;
  }

  set lineWight(value: number) {
    this._lineWight = value;
  }

  get lineType(): LineType {
    return this._lineType;
  }

  set lineType(value: LineType) {
    this._lineType = value;
  }

  abstract draw(): SVGElement;
}
