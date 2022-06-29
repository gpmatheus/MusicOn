import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { PlaylistMRoutingModule } from './playlist-m-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistMRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class PlaylistMModule { }
