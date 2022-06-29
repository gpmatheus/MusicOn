import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMRoutingModule } from './search-m-routing.module';
import { SearchComponent } from './search/search.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchMRoutingModule,
    MatToolbarModule
  ]
})
export class SearchMModule { }
