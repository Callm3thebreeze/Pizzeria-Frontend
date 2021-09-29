import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormButtonComponent } from 'projects/core-library/src/lib/components/form-button/form-button.component';
import { FormInputComponent } from 'projects/core-library/src/lib/components/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormButtonComponent,
    FormInputComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
