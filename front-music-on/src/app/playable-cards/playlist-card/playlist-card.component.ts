import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {

  @Input() photo: string = ''

  @Input() name: string = ''

  @Input() public: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.public) {
      this.photo = '../assets/default.png'
    }
  }

}
