import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { OAuth2RedirectHandlerComponent } from './oauth2-redirect-handler/oauth2-redirect-handler.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfile } from './environment';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'oauth2/:provider/redirect', component: OAuth2RedirectHandlerComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile/:authProvider', component: UserProfileComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
