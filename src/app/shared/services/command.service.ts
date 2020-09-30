import {Injectable} from '@angular/core';
import {LineType} from '../enums/line-type.enum';
import {Circle, Ellipse, Figure, Rectangle, Shape} from '../interfaces/figure';
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

    const figure: Figure = {};

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
    return this.setFigureProperties(figure, properties);
  }

  private setFigureProperties(figure: Shape, properties: string[]): Shape {
    properties.forEach(value => {
      switch (value.match(/\w+\d?/)[0]) {
        case 'c':
          figure.color = value.slice(1);
          break;
        case 'lw':
          figure.lineWidth = CommandService.parseLineWidth(value);
          break;
        case 'lt':
          figure.lineType = CommandService.parseLineType(value);
          break;
        case 'b':
          figure.background = value.slice(1);
          break;
        case 'r':
          (figure as Circle).r = +value.slice(1);
          break;
        case 'r1':
          (figure as Ellipse).rx = +value.split(' ').slice(1);
          break;
        case 'r2':
          (figure as Ellipse).ry = +value.split(' ').slice(1);
          break;
      }
    });
    return figure;
  }

}

