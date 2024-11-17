import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CreateThemeComponent } from './theme/create-theme/create-theme.component';
import { MainComponent } from './main/main.component';
import { DetailsThemeComponent } from './theme/details-theme/details-theme.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  {
    path: 'themes',
    children: [
      { path: '', component: MainComponent },
      { path: ':themeId', component: DetailsThemeComponent },
    ],
  },
  { path: 'create-theme', component: CreateThemeComponent },

  { path: 'posts', component: PostsComponent },

  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
];
