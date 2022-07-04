import { Album, Artist, PlayableProviderService, Playlist } from 'src/app/services/temp/playable-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // somente para exemplo

  albuns: Album[] = [];

  playlists: Playlist[] = [];

  artists: Artist[] = [];

  constructor(playableProviderService: PlayableProviderService) {
    this.albuns = playableProviderService.getAlbuns();
    this.playlists = playableProviderService.getPlaylists();
    this.artists = playableProviderService.getArtists();
  }

  ngOnInit(): void {
  }

}
