import { MainScreenComponent } from './main-screen/main-screen.component';
import { SearchComponent } from './../search-m/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainScreenComponent, loadChildren: () => import('../home-m/home-m.module').then(m => m.HomeMModule)},
  {path: 'search', component: MainScreenComponent, loadChildren: () => import('../search-m/search-m.module').then(m => m.SearchMModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ]
})
export class MainScreenMRoutingModule { }
