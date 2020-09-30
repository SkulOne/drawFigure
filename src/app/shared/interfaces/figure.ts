import {LineType} from '../enums/line-type.enum';
import {Coords} from './coord';
import {ShapeType} from '../enums/shape-type.enum';
export type Shape = Figure | Line | Rectangle | Triangle | Circle | Ellipse;


export interface Figure {
  shapeType?: ShapeType;
  coords?: unknown;
  background?: string;
  color?: string;
  lineWidth?: number;
  lineType?: LineType;
}

export interface Circle extends Figure {
  shapeType: ShapeType.CIRCLE;
  coords: Coords[];
  r: number;
}

export interface Ellipse extends Figure{
  coords: Coords[];
  rx: number;
  ry: number;
  shapeTYpe: ShapeType.ELLIPSE;
}

export interface Line extends Figure{
  cords: Coords[][];
  shapeType: ShapeType.LINE;
}

export interface Rectangle extends Figure{
  shapeType: ShapeType.RECTANGLE;
  coords: Coords[];
  width: number;
  height: number;
}

export interface Triangle extends Figure{
  shapeType: ShapeType.TRIANGLE;
  coords: string;
}

