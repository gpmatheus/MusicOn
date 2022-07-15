import { AuthenticationService } from './../../services/authentication/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/app.component';
import { Router } from '@angular/router';

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
  menuToggleEnabled: boolean = false;

  constructor(private authenticationService : AuthenticationService, private router: Router) { }

  authenticate() : void {
    this.authenticationService.authenticate(this.loginForm.value.userName!, this.loginForm.value.password!)
    .subscribe(v => {
      if (v) {
        this.router.navigateByUrl('/');
      }
    });
  }

  toggleDrawer(): void {
  }

  ngOnInit(): void {
  }

}
