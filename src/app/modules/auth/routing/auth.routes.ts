import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from '../components/admin/admin.component';
import { AuthComponent } from '../components/auth-root/auth.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { NoAccessComponent } from '../components/no-access/no-access.component';

export const AuthRouter: ModuleWithProviders = RouterModule.forChild([{
  path: 'auth',
  component: AuthComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: 'no-access', component: NoAccessComponent }
  ]
}]);