import { Playlist, PlayableProviderService } from 'src/app/main-screen-m/services/temp/playable-provider.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlistId: string | null = '';

  playlist: Playlist;

  constructor(private playableProviderService: PlayableProviderService, private route: ActivatedRoute) {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.playlist = this.playableProviderService.getPlaylistById(this.playlistId);
  }

  ngOnInit(): void {
  }

}
