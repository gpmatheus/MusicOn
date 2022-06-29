import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input() name: string = '';

  @Input() photo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
