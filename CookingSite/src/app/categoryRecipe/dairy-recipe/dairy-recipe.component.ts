import { Component, OnInit ,Input} from '@angular/core';
import { RecipeModel } from '../../model/recipe.model';
import { RecipesService } from '../../service/recipes.service';

let input = {
  "category":"DAIRY"
}

@Component({
  selector: 'app-dairy-recipe',
  templateUrl: './dairy-recipe.component.html',
  styleUrls: ['./dairy-recipe.component.css']
})
export class DairyRecipeComponent implements OnInit {
  results: any
  @Input('recipe') recipe: RecipeModel
  constructor(private recireService: RecipesService) { }

  ngOnInit(): void {
    this.recireService
    .getAllDairyRecipes(input)
    .subscribe(data => {
      this.results = data;
    })
  }
}
