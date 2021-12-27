import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryServise } from '../../services/categoryes.service';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CategoriesComponent,SubcategoriesComponent],
  imports: [
  CommonModule,
  RouterModule.forChild([])
  ],
  providers:[
    CategoryServise
  ]
})
export class CategoriesModule { }
