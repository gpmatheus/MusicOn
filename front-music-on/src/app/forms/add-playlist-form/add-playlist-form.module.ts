import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AddPlaylistFormRoutingModule } from './add-playlist-form-routing.module';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';


@NgModule({
  declarations: [
    AddPlaylistComponent
  ],
  imports: [
    CommonModule,
    AddPlaylistFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AddPlaylistFormModule { }
