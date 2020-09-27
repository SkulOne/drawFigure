import {Injectable} from '@angular/core';
import {Line} from '../classes/line';
import {Figure} from '../classes/abstract/figure';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor() {
  }

  parseCommand(input: string): Figure[]{
    const commands = input.split(';');
    const figures: Figure[] = [];
    commands.forEach((inputValue: string) => {
      const figureArrayString = inputValue.split(/;/);
      figureArrayString.forEach((command) => {
        const figureOptions = command.split(/\s-/).map(s => s.trim());

        const [figureName, ...options] = figureOptions;
        let coords = [];
        switch (figureName) {
          case 'line':
            options.forEach(value => {
              switch (value[0]) {
                case 'p':
                  coords = value.match(/(\d+), ?(\d+)/g)
                    .map(value1 => {
                      return value1.split(/, ?/)
                        .map(val => +val);
                    });
                  break;
              }
            });
            figures.push(new Line(coords));
          //   case 'rectangle':
          //     return new Rectangle(coords);
          //   case 'circle':
          //     return new Circle(coords);
          //   case 'ellipse':
          //     return new Ellipse(coords);
          //   case 'triangle':
          //     return new Triangle(coords);
        }

      });
      // const commandArray = command.split(/\s-/).map(s => s.trim());
      // const [figureName, ...options] = commandArray;
      // const coords = [];
      // console.log(commandArray);

      // switch (figureName) {
      //   case 'line':
      //     options.forEach(value => {
      //       switch (value[0]) {
      //         case 'p':
      //           coords = value.match(/(\d+), ?(\d+)/g)
      //             .map(value1 => {
      //               return value1.split(/, ?/)
      //                 .map(val => +val);
      //             });
      //           break;
      //         case 'c':
      //
      //       }
      //     });
      //     return new Line(coords);
      //   //   case 'rectangle':
      //   //     return new Rectangle(coords);
      //   //   case 'circle':
      //   //     return new Circle(coords);
      //   //   case 'ellipse':
      //   //     return new Ellipse(coords);
      //   //   case 'triangle':
      //   //     return new Triangle(coords);
      // }
    });
    return figures;
  }

  //
  // createFigure(): Figure{
  //
  // }
}
