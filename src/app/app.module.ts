import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryServise } from './services/categoryes.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './core/components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesModule } from './features/categories/categories.module';
import { FeatureModule } from './features/feature.module';
import { HttpIntercept } from './core/helpers/token.interceptor';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    FeatureModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CategoriesModule,

  ],
  providers: [
    AuthService,
    CategoryServise,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
