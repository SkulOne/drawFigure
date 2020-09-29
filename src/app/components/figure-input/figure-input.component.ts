import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {CommandService} from '../../shared/services/command.service';
import {Figure} from '../../shared/classes/abstract/figure';
import {LoggerService} from '../../shared/services/logger.service';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-figure-input',
  templateUrl: './figure-input.component.html',
  styleUrls: ['./figure-input.component.scss']
})
export class FigureInputComponent implements OnInit {
  @Output() figureEnter = new EventEmitter<Figure[]>();
  figureCommand: string;
  errorMessage: string;
  reactiveForm: FormControl;
  form: FormGroup;

  constructor(private commandService: CommandService, private logger: LoggerService) {
    this.logger.errorMessage.subscribe((message) => {
      this.errorMessage = message;
    });
    this.form = new FormGroup({
      username: new FormControl('')
    });
    this.reactiveForm = new FormControl('', [], [emailDomainValidator]);
    console.log(this.form);
    console.log(this.reactiveForm);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    try {
      this.figureEnter.emit(this.commandService.getFigures(this.reactiveForm.value));
    } catch (e) {
      this.logger.errorMessage.next(e.message);
    }
    this.logger.log(this.figureCommand);
  }

  test(va): void {
    console.log(va);
  }

}

function emailDomainValidator(control: FormControl): Observable<ValidationErrors> {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {
    const [_, domain] = email.split('@');
    if (domain !== 'codecraft.tv') {
      return of({
        emailDomain: {
          parsedDomain: domain
        }
      });
    }
  }
  return of(null);
}
