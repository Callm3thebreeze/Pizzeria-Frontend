import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authorize } from 'core-library';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss']
})

export class IngredientSelectorComponent implements OnInit {


ingredients: Ingredient[] = [];

  constructor(
    private ingredientservice: IngredientService, 
    private router?: Router) { }

  ngOnInit(){
    this.getIngredients();
  }

  @Authorize()
  private getIngredients() {
    this.ingredientservice.findAllIngredient().subscribe(
      ingredientData => { this.ingredients = ingredientData}
    )
  }

  // NewIngredient() {

  //   ingredient: Ingredient = new Ingredient();

  //   IngredientService.addIngredient(this.ingredient).subscribe(
  //     ingredientData => {
  //       console.log(ingredientData);
  //       this.redirectIngredientList();
  //     },
  //     error => console.log(error));

}
