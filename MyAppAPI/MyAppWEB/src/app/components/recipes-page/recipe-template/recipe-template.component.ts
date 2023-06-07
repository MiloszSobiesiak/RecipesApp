import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  styleUrls: ['./recipe-template.component.scss'],
})
export class RecipeTemplateComponent {
  @Input()
  public recipe: Recipe;

  @Output()
  public deleteAction = new EventEmitter();

  constructor(private recipeService: RecipesService) {}

  public deleteRecipe(id: number): void {
    this.recipeService
      .deleteRecipe(id)
      .pipe(finalize(() => this.deleteAction.emit()))
      .subscribe();
  }
 
  public addToFavourtie(id: number): void {
    this.recipeService
      .addRecipeToFavorties(id)
      .pipe(
        finalize(() => {
          (this.recipe.isFavortie = !this.recipe.isFavortie), this.showIcon();
        })
      )
      .subscribe();
  }

  public showIcon(): string {
    if (this.recipe.isFavortie) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
