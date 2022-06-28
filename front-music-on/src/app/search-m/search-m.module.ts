import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMRoutingModule } from './search-m-routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchMRoutingModule
  ]
})
export class SearchMModule { }
