import { Component, OnInit,Input } from '@angular/core';
import { RecipeModel } from '../../model/recipe.model';
import { RecipesService } from '../../service/recipes.service';

let input = {
  "category":"LEGUMES"
}

@Component({
  selector: 'app-legumes-recipe',
  templateUrl: './legumes-recipe.component.html',
  styleUrls: ['./legumes-recipe.component.css']
})
export class LegumesRecipeComponent implements OnInit {

  results: any

  @Input('recipe') recipe: RecipeModel

   constructor(private recireService: RecipesService) { }

   ngOnInit(): void {
    this.recireService
    .getAllLegumesRecipes(input)
    .subscribe(data => {
      this.results = data;
    })
  }

}
