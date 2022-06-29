import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMRoutingModule } from './search-m-routing.module';
import { SearchComponent } from './search/search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchMRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SearchMModule { }
