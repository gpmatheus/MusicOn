import { PlayableProviderService } from './../services/temp/playable-provider.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../services/temp/playable-provider.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  playlists: Playlist[] = []

  constructor(playableProviderService: PlayableProviderService) {
    this.playlists = playableProviderService.getPlaylists();
  }

  ngOnInit(): void {
  }
}
