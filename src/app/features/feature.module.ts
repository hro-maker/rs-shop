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
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [MainComponent, ByCategoryIdComponent, ProductDetailsComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ProgressSpinnerModule,
    RouterModule,
    GalleriaModule,
    ImageModule,
    ButtonModule,
  ],
  exports: [MainComponent, ByCategoryIdComponent, ProductDetailsComponent],
})
export class FeatureModule {}
