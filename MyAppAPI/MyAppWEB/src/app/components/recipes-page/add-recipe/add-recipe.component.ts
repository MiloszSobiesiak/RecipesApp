import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { IngredientsType } from 'src/app/shared/enums/ingredients-type.enum';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent {
  @ViewChild('inputName', { static: false }) inputEl: ElementRef;

  public recipe: Recipe = {
    name: null,
    description: null,
    ingredients: [],
    difficultyLevel: null,
    portions: null,
    preparationTime: null,
  };

  public ingredientsTypes = IngredientsType;

  public get isObjectReady(): boolean {
    return (
      this.recipe.name != null &&
      this.recipe.description != null &&
      this.recipe.ingredients.length > 0 &&
      this.recipe.difficultyLevel != null &&
      this.recipe.portions != null &&
      this.recipe.preparationTime != null
    );
  }

  constructor(
    private recipesService: RecipesService,
    private notificationService: NotificationsService
  ) {}

  public addRecipe(): void {
    if (this.isObjectReady) {
      this.recipesService.addRecipe(this.recipe).subscribe(
        (_) => {
          this.recipe.name = null;
          this.recipe.description = null;
          this.recipe.ingredients = [];
          this.recipe.difficultyLevel = null;
          this.recipe.portions = null;
          this.recipe.preparationTime = null;
        },
        (err) => {
          this.notificationService.success(err.error);
        }
      );
    }
  }

  public test(e: KeyboardEvent): void {
    if (e.key == 'Enter') {
      e.preventDefault();
      // this.addIngredient();
      this.inputEl.nativeElement.focus();
    }
  }

  public addRate(value: number) {
    this.recipe.difficultyLevel = value;
  }
}
