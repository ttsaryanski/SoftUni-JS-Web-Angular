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
  setUsernameErrorClass,
} from '../../utils/set.dinamic.class';
import { emailValidator } from '../../utils/validators';
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
    passGroup: new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rePassword: new FormControl('', [Validators.required]),
    }),
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

  register() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
