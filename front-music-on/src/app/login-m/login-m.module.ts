import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { LoginMRoutingModule } from './login-m-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginMRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginMModule { }
