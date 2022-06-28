import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainScreenMRoutingModule } from './main-screen-m-routing.module';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NavigationButtonComponent } from '../main-screen-m/navigation-button/navigation-button.component';
import { PlayerBarComponent } from '../main-screen-m/player-bar/player-bar.component';


@NgModule({
  declarations: [
    MainScreenComponent,
    PlayerBarComponent,
    NavigationButtonComponent,
  ],
  imports: [
    CommonModule,
    MainScreenMRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule
  ],
  exports: [
    MainScreenComponent
  ]
})
export class MainScreenMModule { }
