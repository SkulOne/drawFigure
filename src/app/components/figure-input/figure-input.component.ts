import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-figure-input',
  templateUrl: './figure-input.component.html',
  styleUrls: ['./figure-input.component.scss']
})
export class FigureInputComponent implements OnInit {
  @Output() figureEnter = new EventEmitter<string>();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      query: new FormControl('circle -p [75, 75] -r 25 -c rgba(255, 0, 0, 0.8) -b rgba(0, 255, 0, 0.3); line -p [50, 50] [100, 100] -c rgb(255, 0, 0)',
        [Validators.required, shapeCommandValidator])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.figureEnter.emit(this.form.getRawValue().query);
    }
  }
}

function shapeCommandValidator(control: FormControl): ValidationErrors {
  const inputValue = control.value[control.value.length - 1] === ';' ? control.value.substr(0, control.value.length - 1) : control.value;
  const commands = inputValue.split(';');
  let result = null;
  commands.forEach((command) => {
    if (!/^\s?[a-z]+[^0-9]\s-p(\s\[\d+,\s?\d+])+\s/.test(command)) {
      result = {
        error: 'Enter the command using the pattern figureName -p [number, number] ...options'
      };
    }
    if (command.includes('circle')){
      if (!/\s-r\s\d+\s?/.test(command)){
        result = {
          error: 'The circle must have a radius'
        };
      }
    }
    if (command.includes('ellipse')){
      if (!/\s-r1\s\d+\s/.test(command)){
        result = {
          error: 'The ellipse must have a r1=number'
        };
      }
      if (!/\s-r2\s\d+\s/.test(command)){
        result = {
          error: 'The ellipse must have a r2=number'
        };
      }
    }
  });
  return result;
}
