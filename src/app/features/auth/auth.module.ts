import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports:[LoginComponent,RegisterComponent],
  imports: [
  RouterModule,
  CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class AuthModule { }
