import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserForAuth } from '../../types/user';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailValidator } from '../../utils/validators';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  currentUser = {} as UserForAuth;
  form!: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.currentUser = this.userService.getProfile();

    this.form = new FormGroup({
      username: new FormControl(this.currentUser.username, [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(this.currentUser.email, [
        Validators.required,
        emailValidator(DOMAINS),
      ]),
      tel: new FormControl(this.currentUser.tel),
    });
  }

  saveUser() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);

    this.currentUser = this.form.value as UserForAuth;
    this.toggleEditMode();
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
