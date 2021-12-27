import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './features/categories/categories.component';
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/main.component';
import { ByCategoryIdComponent } from './features/by-category-id/by-category-id.component';
const routes: Routes = [
      {
        path: 'categories',
        component:CategoriesComponent,

      },
      {path:'categories/:id',component:ByCategoryIdComponent},
      {path:'categories/:id/:subid',component:ByCategoryIdComponent},
        {path:'',
        component:MainComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
