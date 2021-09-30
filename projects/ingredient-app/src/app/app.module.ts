import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientSelectorComponent } from './ingredient-selector/ingredient-selector.component';
import { CoreLibraryModule } from 'core-library';




@NgModule({
  declarations: [	
    AppComponent,
      IngredientSelectorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    CoreLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


@NgModule({})
export class IngredientSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [],
    }
  }
}