import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { productQuantitiesModel } from '../model/productQuantities.model'
import { RecipeModel } from '../model/recipe.model' 
import { productMeatQuantModel } from '../model/productMeatQuont.model'
import { ProductVegetableQuantModel } from '../model/productVegetableQuont.model'
import { productDairyQuantModel } from '../model/productDairyQuant.model'
import { productLegumesQuantModel } from '../model/productLegumesQuant.model'


@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  path: string = 'http://localhost:3050/';

  constructor(private httpClient: HttpClient) {
  }

  getAllRecipe(): Observable<Object> {
    return this.httpClient.get<any>(`${this.path}all-recipes`)
  }


  searchRecipe(input){
    return this.httpClient.post(`${this.path}find-recipe`, input)
  }

  createRecipe(recipeForFetch){
    return this.httpClient.post(`${this.path}create-recipe`, recipeForFetch)
  }

  createQuontM(quantityMeattModel: productMeatQuantModel){
    return this.httpClient.post(`${this.path}create-quantity`, quantityMeattModel)
  }
  createQuontV(quantitVegModel: ProductVegetableQuantModel){
    return this.httpClient.post(`${this.path}create-quantity`, quantitVegModel)
  }

  createQuontD(quantityDairyModel: productDairyQuantModel){
    return this.httpClient.post(`${this.path}create-quantity`, quantityDairyModel)
  }

  createQuontL(quantityLegumesModel: productLegumesQuantModel){
    return this.httpClient.post(`${this.path}create-quantity`, quantityLegumesModel)
  }

  getAllProducts(){
    return this.httpClient.get<any>(`${this.path}getAll-products`)
  }

  getAllMeatRecipes(input) :Observable<Object>{
    return this.httpClient.post<any>(`${this.path}find-recipe-meat`,input)
  }

  getAllDairyRecipes(input) :Observable<Object>{
    return this.httpClient.post<any>(`${this.path}find-recipe-dairy`,input)
  }

  getAllVegetablesRecipes(input) :Observable<Object>{
    return this.httpClient.post<any>(`${this.path}find-recipe-vegetables`,input)
  }

  getAllLegumesRecipes(input) :Observable<Object>{
    return this.httpClient.post<any>(`${this.path}find-recipe-legumes`,input)
  }

}