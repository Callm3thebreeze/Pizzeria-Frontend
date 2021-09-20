import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from 'projects/core-library/src/lib/components/menu/menu.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDisplayComponent } from './pizza-display/pizza-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzaListComponent,
    PizzaDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
