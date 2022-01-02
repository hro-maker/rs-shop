import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './features/categories/categories.component';
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/main.component';
import { ByCategoryIdComponent } from './features/by-category-id/by-category-id.component';
import { ProductComponent } from './core/components/shared/product/product.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

import { CartComponent } from './features/cart/cart.component';
import { OrdersComponent } from './features/orders/orders.component';
import { AuthGuard } from './core/guards/auth.guard';
import { FavoritesComponent } from './features/favorites/favorites.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  { path: 'categories/:id', component: ByCategoryIdComponent },
  { path: 'categories/:id/:subid', component: ByCategoryIdComponent },
  { path: '', component: MainComponent },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'favorites',component:FavoritesComponent,canActivate:[AuthGuard]},
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuard]},
  {
    path:"**",
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
