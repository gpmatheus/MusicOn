import { PlaylistComponent } from './../playlist-m/playlist/playlist.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SearchComponent } from './../search-m/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('../home-m/home-m.module').then(m => m.HomeMModule)},
  {path: 'search', loadChildren: () => import('../search-m/search-m.module').then(m => m.SearchMModule)},
  {path: 'library', loadChildren: () => import('../library-m/library-m.module').then(m => m.LibraryMModule)},
  {path: 'playlist', loadChildren: () => import('../playlist-m/playlist-m.module').then(m => m.PlaylistMModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ]
})
export class MainScreenMRoutingModule { }
