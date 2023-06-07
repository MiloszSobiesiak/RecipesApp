import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss'],
})
export class RecipesPageComponent implements OnInit, OnDestroy {
  public recipes: Recipe[];
  private subscriptions = new Subscription();

  constructor(private recipesService: RecipesService) {}

  public ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(): void {
    const sub = this.recipesService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
    this.subscriptions.add(sub);
  }

  public ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
