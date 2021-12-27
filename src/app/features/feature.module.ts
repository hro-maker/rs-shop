import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCategoryIdComponent } from './by-category-id/by-category-id.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../core/components/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent, ByCategoryIdComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ProgressSpinnerModule,
    RouterModule,
  ],
  exports: [MainComponent, ByCategoryIdComponent],
})
export class FeatureModule {}
