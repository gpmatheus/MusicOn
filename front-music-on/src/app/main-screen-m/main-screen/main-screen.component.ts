import { PlayableProviderService } from 'src/app/services/temp/playable-provider.service';
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Playlist } from 'src/app/services/temp/playable-provider.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Action } from 'src/app/app.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit, Action {

  @ViewChild('drawer') drawer!: MatDrawer;
  playlists: Playlist[] = []

  constructor(playableProviderService: PlayableProviderService) {
    this.playlists = playableProviderService.getPlaylists();
  }
  menuToggleEnabled: boolean = true;

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  ngOnInit(): void {
  }
}
