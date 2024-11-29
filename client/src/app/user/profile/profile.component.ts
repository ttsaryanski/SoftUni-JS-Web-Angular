import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails, UserForAuth } from '../../types/user';
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

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  };

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = { username, email, tel: tel! };

    this.form.setValue({
      username,
      email,
      tel: tel!,
    });
  }

  saveUser() {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email, tel } = this.profileDetails;
    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleEditMode();
    });
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
