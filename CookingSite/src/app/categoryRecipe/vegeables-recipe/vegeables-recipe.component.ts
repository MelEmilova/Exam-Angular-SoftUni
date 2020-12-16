import { Component, OnInit,Input } from '@angular/core';
import { RecipeModel } from '../../model/recipe.model';
import { RecipesService } from '../../service/recipes.service';

let input = {
  "category":"VEGETABLES"
}


@Component({
  selector: 'app-vegeables-recipe',
  templateUrl: './vegeables-recipe.component.html',
  styleUrls: ['./vegeables-recipe.component.css']
})
export class VegeablesRecipeComponent implements OnInit {

  results: any

  @Input('recipe') recipe: RecipeModel

  constructor(private recireService: RecipesService) { }

  ngOnInit(): void {
    this.recireService
    .getAllVegetablesRecipes(input)
    .subscribe(data => {
      this.results = data;
    })
  }
}
