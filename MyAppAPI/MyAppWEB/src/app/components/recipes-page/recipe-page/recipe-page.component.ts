import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  public id: number;
  public recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) 
  {}


  public ngOnInit(): void {
    this.id = +this.route?.snapshot?.paramMap?.get('id');
    this.recipesService.getRecipe(this.id).subscribe(recipe=>{
      this.recipe = recipe;
    })
  }

  public saveChanges(): void {
    console.log(this.recipe)
  }
}
