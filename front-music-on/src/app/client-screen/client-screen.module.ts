import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientScreenRoutingModule } from './client-screen-routing.module';
import { ClientScreenComComponent } from './client-screen-com/client-screen-com.component';


@NgModule({
  declarations: [
    ClientScreenComComponent
  ],
  imports: [
    CommonModule,
    ClientScreenRoutingModule
  ]
})
export class ClientScreenModule { }
