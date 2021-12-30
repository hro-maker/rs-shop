import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BadgeModule} from 'primeng/badge';
import { MenuComponent } from './header/menu/menu.component';
import { SubheaderComponent } from './header/subheader/subheader.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CategoryServise } from 'src/app/services/categoryes.service';
import { CategoriesComponent } from './header/categories/categories.component';
import { RouterModule } from '@angular/router';
import { GoodServise } from '../../../services/goods.service';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ImageModule} from 'primeng/image';
import { ProductComponent } from './product/product.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { AccountButtonsComponent } from './header/account-buttons/account-buttons.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SubheaderComponent,
    CategoriesComponent,
    SearchboxComponent,
    ProductComponent,
    ImageModalComponent,
    AccountButtonsComponent
  ],
  exports: [
    HeaderComponent,
    SubheaderComponent,
    CategoriesComponent,
    ProductComponent,
    ImageModalComponent
  ],
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BadgeModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild([]),
    ProgressSpinnerModule,
    ImageModule,
    CardModule,
  ],
  providers:[CategoryServise,GoodServise]
})
export class SharedModule { }
