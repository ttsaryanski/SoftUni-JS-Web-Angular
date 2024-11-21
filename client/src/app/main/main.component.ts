import { Component } from '@angular/core';
import { ThemesComponent } from '../theme/themes/themes.component';
import { PostsComponent } from '../posts/posts.component';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../user/user.service';




@Component({
    selector: 'app-main',
    standalone: true,
    imports: [ThemesComponent, PostsComponent, HomeComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
    constructor(private userService: UserService) {};

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    };

}
