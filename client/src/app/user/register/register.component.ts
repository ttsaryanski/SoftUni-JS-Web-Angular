import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { setButtonAttributes } from '../../utils/buttonStatus';
import {
  setEmailErrorClass,
  setPasswordErrorClass,
  setRePasswordErrorClass,
  setUsernameErrorClass,
} from '../../utils/set.dinamic.class';
import { emailValidator, matchPasswordValidator } from '../../utils/validators';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(''),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [matchPasswordValidator('password', 'rePassword')],
      }
    ),
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  setButton(form: any) {
    return setButtonAttributes(form);
  }

  setUsernameClass(username: any) {
    return setUsernameErrorClass(username);
  }

  setEmailClass(email: any) {
    return setEmailErrorClass(email);
  }

  setPasswordClass(password: any) {
    return setPasswordErrorClass(password);
  }

  setRePasswordClass(rePassword: any, errors: any) {
    return setRePasswordErrorClass(rePassword, errors);
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.form.reset();
  }
}
