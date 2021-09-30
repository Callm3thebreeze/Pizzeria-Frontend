import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';
import { AuthorizationObserver } from 'projects/core-library/src/lib/services/authorizationobserver';
import { DecoratorService } from 'projects/core-library/src/lib/services/decoratorservice';
import { INTERCEPTORS } from 'core-library';
import { CoreLibraryModule } from 'core-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const providers:any[] = [INTERCEPTORS, AuthorizationObserver]
const routes: Routes =[
  
];
@NgModule({
  declarations: [		
      AppComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreLibraryModule,
    FormsModule

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