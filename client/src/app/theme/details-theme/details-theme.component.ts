import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-details-theme',
  standalone: true,
  imports: [HomeComponent, LoaderComponent],
  templateUrl: './details-theme.component.html',
  styleUrl: './details-theme.component.css',
})
export class DetailsThemeComponent implements OnInit {
  isLoading: boolean = true;
  theme = {} as Theme;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get name(): string {
    return this.userService.user?.username || '';
  }

  post(event: Event) {
    event.preventDefault();

    this.router.navigate(['/xxx']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['themeId'];

    this.apiService.getSingleTheme(id).subscribe((theme) => {
      this.theme = theme;
      this.isLoading = false;
    });
  }
}
