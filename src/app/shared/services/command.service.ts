import {Injectable} from '@angular/core';
import {LineType} from '../enums/line-type.enum';
import {Circle, Ellipse, BaseShape, Rectangle, Shape} from '../interfaces/baseShape';
import {Coords} from '../interfaces/coord';
import {ShapeType} from '../enums/shape-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor() {
  }

  private static parseCoords(value): Coords[] {
    return value.match(/(\d+),\s?(\d+)/g)
      .map(value1 => {
        const coords = value1.split(/, ?/);
        return ({x: coords[0], y: coords[1]} as Coords);
      });
  }

  private static parseLineType(value: string): LineType {
    switch (value.match(/\w{3,}/)[0]) {
      case 'solid':
        return LineType.Solid;
      case 'point':
        return LineType.Point;
      case 'dottedline':
        return LineType.DottedLine;
    }
  }

  private static parseLineWidth(value): number {
    return +value.match(/\d+/)[0];
  }

  private static clearEmptyStrings(commandsArray: string[]): string[] {
    return commandsArray.filter((command) => command.trim() !== '');
  }

  getFigures(input: string): Shape[] {
    let commands: string[] = input.split(';');
    commands = CommandService.clearEmptyStrings(commands);
    return commands.map((value => this.createFigure(value)));
  }

  private createFigure(inputValue: string): Shape {
    const [figureName, coordsString, ...properties] = inputValue.split(/\s-/).map(s => s.trim());
    const coords = CommandService.parseCoords(coordsString);

    const figure: BaseShape = {};

    switch (figureName) {
      case 'line':
        figure.shapeType = ShapeType.LINE;
        figure.coords = coords;
        break;
      case 'rectangle':
        figure.shapeType = ShapeType.RECTANGLE;
        (figure as Rectangle).width = Math.abs(coords[0].x - coords[1].x);
        (figure as Rectangle).height = Math.abs(coords[0].y - coords[1].y);
        figure.coords = coords;
        break;
      case 'circle':
        figure.shapeType = ShapeType.CIRCLE;
        figure.coords = coords;
        break;
      case 'ellipse':
        figure.shapeType = ShapeType.ELLIPSE;
        figure.coords = coords;
        break;
      case 'triangle':
        figure.shapeType = ShapeType.TRIANGLE;
        figure.coords = coords.toString();
        break;
    }
    return this.setShapeProperties(figure, properties);
  }

  private setShapeProperties(shape: Shape, properties: string[]): Shape {
    properties.forEach(value => {
      switch (value.match(/\w+\d?/)[0]) {
        case 'c':
          shape.color = value.slice(1);
          break;
        case 'lw':
          shape.lineWidth = CommandService.parseLineWidth(value);
          break;
        case 'lt':
          shape.lineType = CommandService.parseLineType(value);
          break;
        case 'b':
          shape.background = value.slice(1);
          break;
        case 'r':
          (shape as Circle).r = +value.slice(1);
          break;
        case 'r1':
          (shape as Ellipse).rx = +value.split(' ').slice(1);
          break;
        case 'r2':
          (shape as Ellipse).ry = +value.split(' ').slice(1);
          break;
      }
    });
    return shape;
  }

}

