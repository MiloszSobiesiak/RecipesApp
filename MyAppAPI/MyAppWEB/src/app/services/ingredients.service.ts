import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
    constructor(private http: HttpClient) { }
  
    public getIngredients(id: number): Observable<Ingredient[]> {
      return this.http.get<Ingredient[]>(`${environment.apiUrl}/ingredients/${id}`)
    }
}