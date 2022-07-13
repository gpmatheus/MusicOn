import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  playlistForm = new FormGroup({
    name: new FormControl(''),
    photo: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit() : void {

  }

}
