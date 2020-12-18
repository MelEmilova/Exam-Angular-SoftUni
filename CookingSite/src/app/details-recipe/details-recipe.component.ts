import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RecipesService } from '../service/recipes.service'

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.css']
})
export class DetailsRecipeComponent implements OnInit {

  myRecipe: any
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id= params['id']
      this.recipeService
      .getRecipeDetail(id)
      .subscribe((selectedRecipe) =>{
        this.myRecipe = selectedRecipe
        console.log(this.myRecipe);
      })
      
    })
  }

}
