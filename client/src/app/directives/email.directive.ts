import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { emailValidator } from '../utils/validators';

@Directive({
  selector: '[appEmail]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EmailDirective,
    },
  ],
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const ValidatorFn = emailValidator(this.appEmail);

    return ValidatorFn(control);
  }
}
