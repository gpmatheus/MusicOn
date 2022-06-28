import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  playlists = [
    {name: 'My first playlist'},
    {name: 'My second playlist'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
