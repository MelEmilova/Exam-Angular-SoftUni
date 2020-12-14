import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  


  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

}
