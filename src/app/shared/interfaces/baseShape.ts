import {LineType} from '../enums/line-type.enum';
import {Coords} from './coord';
import {ShapeType} from '../enums/shape-type.enum';
export type Shape = BaseShape | Line | Rectangle | Triangle | Circle | Ellipse;


export interface BaseShape {
  shapeType?: ShapeType;
  coords?: unknown;
  background?: string;
  color?: string;
  lineWidth?: number;
  lineType?: LineType;
}

export interface Circle extends BaseShape {
  shapeType: ShapeType.CIRCLE;
  coords: Coords[];
  r: number;
}

export interface Ellipse extends BaseShape{
  coords: Coords[];
  rx: number;
  ry: number;
  shapeTYpe: ShapeType.ELLIPSE;
}

export interface Line extends BaseShape{
  cords: Coords[][];
  shapeType: ShapeType.LINE;
}

export interface Rectangle extends BaseShape{
  shapeType: ShapeType.RECTANGLE;
  coords: Coords[];
  width: number;
  height: number;
}

export interface Triangle extends BaseShape{
  shapeType: ShapeType.TRIANGLE;
  coords: string;
}

