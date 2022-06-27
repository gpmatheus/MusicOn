import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent implements OnInit {

  imageSrc: string = '../assets/rebirth.jfif';
  songName: string = 'Rebirth';
  artist: string = 'Angra';

  constructor() {
  }

  ngOnInit(): void {
  }

}
