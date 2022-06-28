import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen-m/main-screen/main-screen.component';

const routes: Routes = [
  {path: '', component: MainScreenComponent, loadChildren: () => import('./main-screen-m/main-screen-m.module').then(m => m.MainScreenMModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
