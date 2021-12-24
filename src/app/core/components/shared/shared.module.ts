import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BadgeModule} from 'primeng/badge';
import { MenuComponent } from './header/menu/menu.component';
import { SubheaderComponent } from './header/subheader/subheader.component';
import {ButtonModule} from 'primeng/button';
import { CategoryServise } from 'src/app/services/categoryes.service';
import { CategoriesComponent } from './header/categories/categories.component';
@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SubheaderComponent,
    CategoriesComponent
  ],
  exports: [HeaderComponent,SubheaderComponent,CategoriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    BadgeModule,
    InputTextModule,
    ButtonModule,

  ],
  providers:[CategoryServise]
})
export class SharedModule { }
