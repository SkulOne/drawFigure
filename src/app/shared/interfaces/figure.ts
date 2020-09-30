import {LineType} from '../enums/line-type.enum';
import {FigureType} from '../enums/figure-type.enum';

export interface Figure{
  coord?: number[][];
  shapeType?: FigureType;
  lineColor?: string;
  backgroundColor?: string;
  lineWight?: number;
  lineType?: LineType;
  radius?: number;
  radius2?: number;
}
