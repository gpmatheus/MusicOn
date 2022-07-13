import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { UploadPhotoFileComponent } from './upload-photo-file/upload-photo-file.component';



@NgModule({
  declarations: [
    UploadPhotoFileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    UploadPhotoFileComponent
  ]
})
export class FormElementsModule { }
