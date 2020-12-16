import { Component, OnInit,Input } from '@angular/core';
import { RecipeModel } from '../../model/recipe.model';
import { RecipesService } from '../../service/recipes.service';

let input = {
  "category":"MEAT"
}

@Component({
  selector: 'app-meat-recipe',
  templateUrl: './meat-recipe.component.html',
  styleUrls: ['./meat-recipe.component.css']
})
export class MeatRecipeComponent implements OnInit {

  results: any

  @Input('recipe') recipe: RecipeModel

  constructor(private recireService: RecipesService) { }

  ngOnInit(): void {
    this.recireService
    .getAllMeatRecipes(input)
    .subscribe(data => {
      this.results = data;
    })
  }

}
