import { NgModule } from '@angular/core';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    MenuComponent,
    FormButtonComponent,
    FormInputComponent,
    NavbarComponent

  ],
  imports: [
  ],
  exports: [
    MenuComponent,
    FormButtonComponent,
    FormInputComponent,
    NavbarComponent
  ]    
})

export class CoreLibraryModule { }
