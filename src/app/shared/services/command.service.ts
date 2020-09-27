import {Injectable} from '@angular/core';
import {Line} from '../classes/line';
import {Figure} from '../classes/abstract/figure';
import {LineType} from '../enums/line-type.enum';
import {Circle} from '../classes/circle';
import {Ellipse} from '../classes/ellipse';
import {Triangle} from '../classes/triangle';
import {Rectangle} from '../classes/rectangle';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor() {
  }

  private static parseCoords(value): number[][] {
    return value.match(/(\d+), ?(\d+)/g)
      .map(value1 => {
        return value1.split(/, ?/)
          .map(val => +val);
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
    return +value.match(/(\d+)/)[0];
  }

  private static clearEmptyStrings(commandsArray: string[]): string[] {
    return commandsArray.filter((command) => command.trim() !== '');
  }

  parseCommand(input: string): Figure[] {
    let commands: string[] = input.split(';');
    const figures: Figure[] = [];
    commands = CommandService.clearEmptyStrings(commands);
    commands.forEach((inputValue: string) => {
      const figureProperty = inputValue.split(/\s-/).map(s => s.trim());
      const [figureName, ...properties] = figureProperty;
      switch (figureName) {
        case 'line':
          const line: Line = new Line();
          figures.push(this.createFigure(line, properties));
          break;
        case 'rectangle':
          const rectangle: Rectangle = new Rectangle();
          figures.push(this.createFigure(rectangle, properties));
          return;
        case 'circle':
          const circle: Circle = new Circle();
          figures.push(this.createFigure(circle, properties));
          break;
        case 'ellipse':
          const ellipse: Ellipse = new Ellipse();
          figures.push(this.createFigure(ellipse, properties));
          break;
        case 'triangle':
          const triangle: Triangle = new Triangle();
          figures.push(this.createFigure(triangle, properties));
          break;
      }
    });
    return figures;
  }

  private createFigure(figure: Figure, properties: string[]): Figure {
    properties.forEach(value => {
      switch (value.match(/\w+\d?/)[0]) {
        case 'p':
          figure.coord = CommandService.parseCoords(value);
          break;
        case 'c':
          figure.lineColor = value.slice(1);
          break;
        case 'lw':
          figure.lineWight = CommandService.parseLineWidth(value);
          break;
        case 'lt':
          figure.lineType = CommandService.parseLineType(value);
          break;
        case 'b':
          figure.backgroundColor = value.slice(1);
          break;
        case 'r':
          (figure as Circle).radius = +value.slice(1);
          break;
        case 'rx':
          (figure as Ellipse).radius = +value.split(' ').slice(1);
          break;
        case 'ry':
          (figure as Ellipse).radius2 = +value.split(' ').slice(1);
          break;
      }

    });
    return figure;
  }
}
