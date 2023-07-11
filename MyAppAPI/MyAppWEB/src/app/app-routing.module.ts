import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddRecipeComponent } from './components/recipes-page/add-recipe/add-recipe.component';
import { RecipePageComponent } from './components/recipes-page/recipe-page/recipe-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'recipes', component: RecipesPageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'recipe/:id', component: RecipePageComponent},
  {path: 'add-recipe', component: AddRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
