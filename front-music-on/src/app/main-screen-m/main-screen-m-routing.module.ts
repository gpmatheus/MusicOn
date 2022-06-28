import { SearchComponent } from './../search-m/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('../home-m/home-m.module').then(m => m.HomeMModule)},
  {path: 'search', pathMatch: 'full', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ]
})
export class MainScreenMRoutingModule { }
