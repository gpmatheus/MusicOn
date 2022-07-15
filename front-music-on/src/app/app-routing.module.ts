import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasPermissionGuard } from './guards/has-permission/has-permission.guard';
import { MainScreenComponent } from './main-screen-m/main-screen/main-screen.component';

const routes: Routes = [
  {path: '', component: MainScreenComponent, canActivate: [HasPermissionGuard], loadChildren: () => import('./main-screen-m/main-screen-m.module').then(m => m.MainScreenMModule)},
  {path: 'login', loadChildren: () => import('./login-m/login-m.module').then(m => m.LoginMModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
