import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryServise } from './services/categoryes.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from './core/components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/components/shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

 BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CategoryServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
