import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {CommandService} from '../../shared/services/command.service';
import {Figure} from '../../shared/classes/abstract/figure';
import {LoggerService} from '../../shared/services/logger.service';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';

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
      query: new FormControl('line -p [50, 50] [100, 100] -c rgb(255, 0, 0)', [Validators.required, emailDomainValidator])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('onSubmit');
      this.figureEnter.emit(this.form.getRawValue().query);
    }
  }
}

function emailDomainValidator(control: FormControl): ValidationErrors {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {return {
    queryPattern: true
  };
  }
  return null;
}
