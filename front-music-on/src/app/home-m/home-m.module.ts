import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMRoutingModule } from './home-m-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PlayableCardsModule } from '../playable-cards/playable-cards.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeMRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PlayableCardsModule,
    MatDividerModule
  ]
})
export class HomeMModule { }
