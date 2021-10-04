import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorizationObserver, CoreLibraryModule, DecoratorService, INTERCEPTORS } from 'core-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpUserService } from './services/userservices';


const providers:any[] = [INTERCEPTORS, AuthorizationObserver, HttpUserService]

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}