import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss'],
})
export class RecipesPageComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  public ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(): void {
    this.recipesService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
