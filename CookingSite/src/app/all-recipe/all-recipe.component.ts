import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../model/recipe.model';
import { RecipesService } from '../service/recipes.service';

// const allRecipe = []

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})

export class AllRecipeComponent implements OnInit {

  results: any
  // ind: string
  // product: any

  @Input('recipe') recipe: RecipeModel

  isLoading = false

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService
      .getAllRecipe()
      .subscribe(data => {
        // this.isLoading = true;
        this.results = data
      })
  }
}
