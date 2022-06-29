import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayableCardsRoutingModule } from './playable-cards-routing.module';
import { AlbumCardComponent } from './album-card/album-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';


@NgModule({
  declarations: [
    AlbumCardComponent,
    PlaylistCardComponent,
    ArtistCardComponent
  ],
  imports: [
    CommonModule,
    PlayableCardsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AlbumCardComponent,
    PlaylistCardComponent,
    ArtistCardComponent
  ]
})
export class PlayableCardsModule { }
