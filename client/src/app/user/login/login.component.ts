import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants';
import {
  setEmailErrorClass,
  setPasswordErrorClass,
} from '../../utils/set.dinamic.class';
import { setButtonAttributes } from '../../utils/buttonStatus';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  domains = DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  setEmailClass(email: any) {
    return setEmailErrorClass(email);
  }

  setPasswordClass(password: any) {
    return setPasswordErrorClass(password);
  }

  setButton(form: any) {
    return setButtonAttributes(form);
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.userService.login();
    this.router.navigate(['/home']);
  }
}
