import { PlayableDisplayComponent } from '../home-m/playable-display/playable-display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMRoutingModule } from './home-m-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    PlayableDisplayComponent
  ],
  imports: [
    CommonModule,
    HomeMRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HomeMModule { }
