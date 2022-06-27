import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playable-display',
  templateUrl: './playable-display.component.html',
  styleUrls: ['./playable-display.component.css']
})
export class PlayableDisplayComponent implements OnInit {

  playable: string;
  artist: string;

  constructor() {
    this.playable = 'Rebirth';
    this.artist = 'Angra'
  }

  ngOnInit(): void {
  }

}
