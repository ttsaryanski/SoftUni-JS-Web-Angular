import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../types/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
    currentUser: any;

    constructor(private userService: UserService, private router: Router) { };

    ngOnInit(): void {
        this.currentUser = this.userService.getUser(); 
    };

    editProfile(event: Event) {
        event.preventDefault();
        this.router.navigate(['/xxx']);
    }

}
