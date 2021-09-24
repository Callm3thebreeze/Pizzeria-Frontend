import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibraryModule } from 'core-library';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Spinner, Authorize } from 'core-library';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreLibraryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
