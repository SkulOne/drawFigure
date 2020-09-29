import {Injectable} from '@angular/core';
import {Line} from '../classes/line';
import {Figure} from '../classes/abstract/figure';
import {LineType} from '../enums/line-type.enum';
import {Circle} from '../classes/circle';
import {Ellipse} from '../classes/ellipse';
import {Triangle} from '../classes/triangle';
import {Rectangle} from '../classes/rectangle';
import {LoggerService} from './logger.service';
import {ClassExclusion} from 'tslint/lib/rules/completed-docs/classExclusion';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private static ERROR_MESSAGE = 'Command have invalid parameter for current figure';

  constructor(private logger: LoggerService) {
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

  private static checkType(figure: Figure, figureClass: any): void {
    if (!(figure instanceof figureClass)) {
      throw new Error(CommandService.ERROR_MESSAGE);
    }
  }

  getFigures(input: string): Figure[] {
    let commands: string[] = input.split(';');
    commands = CommandService.clearEmptyStrings(commands);
    return commands.map((value => this.createFigure(value)));
  }

  private setFigureProperties(figure: Figure, properties: string[]): Figure {
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
          CommandService.checkType(figure, Circle);
          (figure as Circle).radius = +value.slice(1);
          break;
        case 'r1':
          CommandService.checkType(figure, Ellipse);
          (figure as Ellipse).radius = +value.split(' ').slice(1);
          break;
        case 'r2':
          CommandService.checkType(figure, Ellipse);
          (figure as Ellipse).radius2 = +value.split(' ').slice(1);
          break;
      }
    });
    return figure;
  }
  private createFigure(inputValue: string): Figure{
    const figureProperty = inputValue.split(/\s-/).map(s => s.trim());
    const [figureName, ...properties] = figureProperty;
    let figure: Figure;
    switch (figureName) {
        case 'line':
          figure = new Line();
          break;
        case 'rectangle':
          figure = new Rectangle();
          break;
        case 'circle':
          figure = new Circle();
          break;
        case 'ellipse':
          figure = new Ellipse();
          break;
        case 'triangle':
          figure = new Triangle();
          break;
      }
    return this.setFigureProperties(figure, properties);
  }
}

