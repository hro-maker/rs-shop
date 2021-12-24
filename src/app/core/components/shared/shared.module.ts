import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BadgeModule} from 'primeng/badge';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  exports: [HeaderComponent],
  imports: [
  CommonModule,
    FormsModule,
    FontAwesomeModule,
    BadgeModule
  ]
})
export class SharedModule { }
