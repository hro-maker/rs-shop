import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCategoryIdComponent } from './by-category-id/by-category-id.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../core/components/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { AuthModule } from './auth/auth.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { CartService } from '../services/cart.service';
import {InputNumberModule} from 'primeng/inputnumber';
import { StepsModule } from 'primeng/steps';

import { FavoritesComponent } from './favorites/favorites.component';
import {CarouselModule} from 'primeng/carousel';
import { SortPipe } from '../core/pipes/sort.pipe';
@NgModule({
  declarations: [SortPipe,MainComponent, ByCategoryIdComponent, ProductDetailsComponent, CartComponent, OrdersComponent, FavoritesComponent],
  imports: [
  FormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ProgressSpinnerModule,
    RouterModule,
    GalleriaModule,
    ImageModule,
    ButtonModule,
    ReactiveFormsModule,
    AuthModule,
    InputNumberModule,
    StepsModule,
    CarouselModule,
  ],
  providers:[AuthService,CartService],
  exports: [SortPipe,FavoritesComponent,CartComponent, OrdersComponent,MainComponent, ByCategoryIdComponent, ProductDetailsComponent,AuthModule],
})
export class FeatureModule {}
