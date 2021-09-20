import { NgModule } from '@angular/core';
import { CoreLibraryComponent } from './core-library.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    CoreLibraryComponent,
    MenuComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent,
    MenuComponent
  ]
})
export class CoreLibraryModule { }
