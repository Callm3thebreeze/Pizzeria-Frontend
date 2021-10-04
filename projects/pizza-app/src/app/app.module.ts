import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibraryModule } from 'core-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';



const providers: any[] = []

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreLibraryModule,
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}

@NgModule({})
export class PizzaSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    }
  }
}