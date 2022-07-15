import { AuthenticationService } from './../../services/authentication/authentication.service';
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

  // authenticationService: AuthenticationService é só pra testar

  constructor(playableProviderService: PlayableProviderService, private authenticationService: AuthenticationService) {
    this.playlists = playableProviderService.getPlaylists();

    // somente para testar
    this.creator = authenticationService.isCreator();
  }
  menuToggleEnabled: boolean = true;

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  ngOnInit(): void {
  }


  // somente para testar
  creator: boolean;
}
