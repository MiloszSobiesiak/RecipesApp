import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
    constructor(private http: HttpClient) { }
  
    public getAllRecipes(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(`${environment.apiUrl}/dish`)
    }

    public getRecipe(id: number): Observable<Recipe> {
      return this.http.get<Recipe>(`${environment.apiUrl}/dish/${id}`)
    }

    public addRecipe(recipe: Recipe): Observable<Recipe> {
      return this.http.post<Recipe>(`${environment.apiUrl}/dish`, recipe)
    }

    public addRecipeToFavorties(id: number): Observable<number> {
      let formData = new FormData();
      formData.append('id', `${id}`);
      return this.http.put<number>(`${environment.apiUrl}/dish`, formData)
    }

    public deleteRecipe(id: number): Observable<Recipe> {
      return this.http.delete<Recipe>(`${environment.apiUrl}/dish/${id}`);
    }
}