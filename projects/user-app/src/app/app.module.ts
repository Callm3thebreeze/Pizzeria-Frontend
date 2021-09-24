import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';
import { AuthorizationObserver } from 'projects/core-library/src/lib/services/authorizationobserver';
import { DecoratorService } from 'projects/core-library/src/lib/services/decoratorservice';
import { INTERCEPTORS } from 'projects/core-library/src/lib/services/interceptors';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const providers:any[] = [INTERCEPTORS, AuthorizationObserver]
const routes: Routes =[
  
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [providers],

  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private decoratorService: DecoratorService){}
}

@NgModule({})
export class UserSharedModule {
  constructor(private router: Router){}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}