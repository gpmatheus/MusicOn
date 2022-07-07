import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPlaylistFormRoutingModule } from './add-playlist-form-routing.module';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';


@NgModule({
  declarations: [
    AddPlaylistComponent
  ],
  imports: [
    CommonModule,
    AddPlaylistFormRoutingModule
  ]
})
export class AddPlaylistFormModule { }
