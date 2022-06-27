import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  openedNav: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
