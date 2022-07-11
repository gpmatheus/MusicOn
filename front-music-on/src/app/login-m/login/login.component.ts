import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, Action {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }
  menuToggleEnabled: boolean = false;

  toggleDrawer(): void {
  }

  ngOnInit(): void {
  }

}
