import { Component, OnInit } from '@angular/core';
import { Album, Artist, PlayableProviderService, Playlist } from 'src/app/main-screen-m/services/temp/playable-provider.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

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
