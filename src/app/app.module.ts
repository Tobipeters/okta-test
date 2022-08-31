import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OAuthModule } from 'angular-oauth2-oidc';

import { OAuthService } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    // OAuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
