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

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    this.userService.login();
    this.router.navigate(['/home']);
  }
}
