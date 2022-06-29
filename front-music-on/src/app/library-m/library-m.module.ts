import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { LibraryMRoutingModule } from './library-m-routing.module';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryMRoutingModule,
    MatTabsModule
  ]
})
export class LibraryMModule { }
