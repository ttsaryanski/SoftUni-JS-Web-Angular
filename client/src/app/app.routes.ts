import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CreateThemeComponent } from './theme/create-theme/create-theme.component';
import { MainComponent } from './main/main.component';
import { DetailsThemeComponent } from './theme/details-theme/details-theme.component';
import { PostsComponent } from './posts/posts.component';
import { isAuthenticated } from './guards/auth.guard';
import { Page404Component } from './page404/page404.component';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [isAuthenticated],
  },

  {
    path: 'themes',
    children: [
      { path: '', component: MainComponent },
      {
        path: ':themeId',
        component: DetailsThemeComponent,
      },
    ],
  },
  {
    path: 'create-theme',
    loadComponent: () =>
      import('./theme/create-theme/create-theme.component').then(
        (c) => c.CreateThemeComponent
      ),
    canActivate: [isAuthenticated],
  },

  { path: 'posts', component: PostsComponent },

  { path: 'error', component: ErrorMsgComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '/404' },
];
