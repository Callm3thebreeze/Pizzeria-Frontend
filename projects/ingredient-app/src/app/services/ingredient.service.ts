import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ingredient } from "../ingredient";
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class IngredientService {

    constructor(private httpClient: HttpClient) { }

    findAllIngredient(): Observable<Ingredient[]> {
        return this.httpClient.get<Ingredient[]>(`${environment.backendURL}`);
    }

    addIngredient(data: Ingredient): Observable<Ingredient> {
        return this.httpClient.post<Ingredient>(`${environment.backendURL}`, data);
    }

    deleteIngredient(id: number): Observable<Ingredient> {
        return this.httpClient.delete<Ingredient>(`${environment.backendURL}/${id}`);
    }

    findIngredient(id: number): Observable<Ingredient[]> {
        return this.httpClient.get<Ingredient[]>(`${environment.backendURL}/${id}`);
    }

    updateIngredient(id: number, data: Ingredient): Observable<Ingredient> {
        return this.httpClient.put(`${environment.backendURL}/${id}`, data);
    }
}

