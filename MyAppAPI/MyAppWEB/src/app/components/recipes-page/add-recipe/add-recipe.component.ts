import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { IngredientsType } from 'src/app/shared/enums/ingredients-type.enum';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  @ViewChild('inputName', {static: false}) inputEl: ElementRef;
  constructor(
    private recipesService: RecipesService,
    private notificationService: NotificationsService
  ) { }

  public recipe: Recipe = {
    name: '',
    description: '',
    ingredients: [],
    difficultyLevel: null,
    portions: null,
    preparationTime: null,
  }

  public ingredients: Ingredient[] = [];

  public ingredientsTypes = IngredientsType;

  public ingredient: Ingredient = {
    name: '',
    amount: '',
    type: ''
  }

  public addIngredient() {
    this.ingredients.push(this.ingredient);
    this.ingredient = {
      name: '',
      amount: '',
      type: '',
    };
  }

  public deleteIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter( e=> {
      return e !== ingredient
    })
  }

  public isDisabled(): boolean {
    return this.recipe.name.length > 0 && this.recipe.difficultyLevel != null && this.recipe.portions != null && this.recipe.preparationTime != null && 
    document.getElementById('textarea').innerHTML.length > 0 && this.ingredients.length >= 1;
  }

  public addRecipe() {
    if (this.isDisabled()) {
      this.recipe.ingredients = this.ingredients;
      this.recipe.description = document.getElementById('textarea').innerHTML;
      this.recipesService.addRecipe(this.recipe).subscribe(
        _ => {
          this.ingredients = []
          this.recipe.name = '';
          this.recipe.description = '';
          this.recipe.difficultyLevel = null;
          this.recipe.portions = null;
          this.recipe.preparationTime = null;
          document.getElementById('textarea').innerHTML = '';
        },
        err => {
          this.notificationService.success(err.error);
        }
      );
    }
  }

  public test(e: KeyboardEvent) {
    if(e.key == 'Enter') {
      e.preventDefault();
      this.addIngredient();
      this.inputEl.nativeElement.focus();
    }
  }

  public addRate(value: number) {
    this.recipe.difficultyLevel = value;
  }
}
