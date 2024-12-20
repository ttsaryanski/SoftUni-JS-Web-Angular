import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { setButtonAttributes } from '../../utils/buttonStatus';
import {
  setEmailErrorClass,
  setPasswordErrorClass,
  setRePasswordErrorClass,
  setUsernameErrorClass,
} from '../../utils/set.dinamic.class';
import { emailValidator, matchPasswordValidator } from '../../utils/validators';
import { DOMAINS } from '../../constants';
import { UserService } from '../user.service';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ErrorMsgComponent],
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

  hasError: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService
      .register(username!, email!, tel!, password!, rePassword!)
      .subscribe({
        next: () => {
          this.hasError = false;
          this.errorMsgService.clearError();
          this.router.navigate(['/home']);
          this.form.reset();
        },
        error: () => {
          this.hasError = true;
        },
      });
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
}
