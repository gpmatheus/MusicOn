import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, Action {

  constructor() { }
  menuToggleEnabled: boolean = false;

  toggleDrawer(): void {
  }

  ngOnInit(): void {
  }

}
