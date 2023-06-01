import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  styleUrls: ['./recipe-template.component.scss']
})
export class RecipeTemplateComponent implements OnInit {

  @Input()
  public recipe: Recipe;

  @Output()
  public deleteAction = new EventEmitter();

  constructor(
    private recipeService: RecipesService
  ) { }

  public ngOnInit(): void {
  }

  public deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
      .pipe(finalize(()=> this.deleteAction.emit()))
      .subscribe();
  }
  public showIcon() {
    if (this.recipe.isFavortie) {
      console.log('siema')
      return 'star';
    } else {
      return 'star_border';
    }
  }
  public addToFavourtie(id: number) {
    console.log(id)
    this.recipeService.addRecipeToFavorties(id)
    .pipe(finalize(()=> {this.recipe.isFavortie = !this.recipe.isFavortie, this.showIcon()}))
    .subscribe();
  }
}
