import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryServise } from './services/categoryes.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './core/components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesModule } from './features/categories/categories.module';
import { MainComponent } from './features/main/main.component';
import { ByCategoryIdComponent } from './features/by-category-id/by-category-id.component';
import { BySubCategoryIdComponent } from './features/by-sub-category-id/by-sub-category-id.component';
@NgModule({
  declarations: [AppComponent, MainComponent, ByCategoryIdComponent, BySubCategoryIdComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CategoriesModule,
  ],
  providers: [CategoryServise],
  bootstrap: [AppComponent],
})
export class AppModule {}
