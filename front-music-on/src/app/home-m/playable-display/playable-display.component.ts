import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playable-display',
  templateUrl: './playable-display.component.html',
  styleUrls: ['./playable-display.component.css']
})
export class PlayableDisplayComponent implements OnInit {

  playable: string = 'Rebirth';
  artist: string = 'Angra';
  image: string = '../assets/rebirth.jfif';

  constructor() {
  }

  ngOnInit(): void {
  }

}
