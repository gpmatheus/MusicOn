import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMRoutingModule } from './home-m-routing.module';
import { HomeComponent } from './home/home.component';
import { MainScreenMModule } from '../main-screen-m/main-screen-m.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeMRoutingModule,
    MainScreenMModule
  ]
})
export class HomeMModule { }
