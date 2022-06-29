import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { LibraryMRoutingModule } from './library-m-routing.module';
import { LibraryComponent } from './library/library.component';
import { PlayableCardsModule } from '../playable-cards/playable-cards.module';


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryMRoutingModule,
    MatTabsModule,
    PlayableCardsModule
  ]
})
export class LibraryMModule { }
