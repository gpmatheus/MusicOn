import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-photo-file',
  templateUrl: './upload-photo-file.component.html',
  styleUrls: ['./upload-photo-file.component.css']
})
export class UploadPhotoFileComponent implements OnInit {

  filePath!: string;

  uploadImage() : void {
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) : void {
    const input = event.target as HTMLInputElement;
    const file = input.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.filePath = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

}
