import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsType } from '../enums/ingredients-type.enum';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent {
  @Input()
  public ingredients: Ingredient[];

  @Output()
  public valueChange = new EventEmitter<Ingredient[]>();

  @Input()
  public editTemplate = false;

  public newIngredient: Ingredient = {
    name: '',
    amount: '',
    type: '',
  };

  public ingredientsTypes = IngredientsType;

  public deleteIngredient(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter((e) => {
      return e !== ingredient;
    });
  }

  public addIngredient(): void {
    this.ingredients.push(this.newIngredient);
    this.newIngredient = {
      name: '',
      amount: '',
      type: '',
    };
  }
}
