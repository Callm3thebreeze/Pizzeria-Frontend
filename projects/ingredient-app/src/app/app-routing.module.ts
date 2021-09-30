import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientSelectorComponent } from './ingredient-selector/ingredient-selector.component';

const routes: Routes = [
  {path: '', component: IngredientSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
