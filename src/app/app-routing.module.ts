import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common-components/login/login.component';
import { NoPermissionComponent } from './common-components/no-permission/no-permission.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { RegisterComponent } from './common-components/register/register.component';
import { LoginGuard } from './guard/login.guard';
import { UserGuard } from './guard/user.guard';
import { AuthGuard } from './modules/admin/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoginGuard],
    pathMatch: 'full',
    component: LoginComponent,
  },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  {
    path: 'user',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, UserGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'no-permission',
    pathMatch: 'full',
    component: NoPermissionComponent,
  },
  {
    path: 'page-not-found',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', pathMatch: 'full', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
