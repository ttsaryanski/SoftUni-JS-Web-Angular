import { Component } from '@angular/core';
import { ThemesComponent } from '../theme/themes/themes.component';
import { PostsComponent } from '../posts/posts.component';
import { HomeComponent } from '../home/home.component';




@Component({
    selector: 'app-main',
    standalone: true,
    imports: [ThemesComponent, PostsComponent, HomeComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
    isLoggedIn: boolean = false;

}
