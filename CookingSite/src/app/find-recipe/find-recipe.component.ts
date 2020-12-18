import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RecipesService } from '../service/recipes.service';

import { ProductMeatModel } from '../model/productMeat.model'
import { ProductVegetableModel } from '../model/productVegetable.model'
import { ProductDairyModel } from '../model/productDairy.model'
import { ProductLegumesModel } from '../model/productLegumes.model'
import { title } from 'process';

const dataForSearch = {
  allProducts: []
}
@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.component.html',
  styleUrls: ['./find-recipe.component.css']
})
export class FindRecipeComponent implements OnInit {
  modelMeatProduct: ProductMeatModel
  modelVegetableProduct: ProductVegetableModel
  modelDairyProduct: ProductDairyModel
  modelLegumesProduct: ProductLegumesModel
  result;
  vegetables;
  meat;
  dairy;
  legumes;

  input;
  constructor(
    private recipeService: RecipesService,
    private router: Router
  ) {

    this.modelMeatProduct = new ProductMeatModel('', 'MEAT')
    this.modelVegetableProduct = new ProductVegetableModel('', 'VEGETABLES')
    this.modelDairyProduct = new ProductDairyModel('', 'DAIRY')
    this.modelLegumesProduct = new ProductLegumesModel('', 'LEGUMES')
  }

  ngOnInit(): void {
  }


  searchRecipe(input) {
    if (this.modelMeatProduct.title === 'Chicken' || this.modelMeatProduct.title === 'Pork' || this.modelMeatProduct.title === 'Beaf' || this.modelMeatProduct.title === 'Lamb') {
      this.meat = this.modelMeatProduct.title
      dataForSearch.allProducts.push(this.meat)
    }

    if (this.modelVegetableProduct.title === 'Potatoes' || this.modelVegetableProduct.title === 'Tomato' || this.modelVegetableProduct.title === 'Carrots' || this.modelVegetableProduct.title === 'Onions' || this.modelVegetableProduct.title === 'Garlic' || this.modelVegetableProduct.title === 'Zucchini' || this.modelVegetableProduct.title === 'Eggplant' || this.modelVegetableProduct.title === 'Mushrooms') {
      this.vegetables = this.modelVegetableProduct.title
      dataForSearch.allProducts.push(this.vegetables)
    }

    if (this.modelDairyProduct.title === 'Feta cheese' || this.modelDairyProduct.title === 'Yellow cheese' || this.modelDairyProduct.title === 'Yoghurt' || this.modelDairyProduct.title === 'Milk' || this.modelDairyProduct.title === 'Cream' || this.modelDairyProduct.title === 'Cottage cheese' || this.modelDairyProduct.title === 'Sour cream') {
      this.dairy = this.modelDairyProduct.title
      dataForSearch.allProducts.push(this.dairy)
    }

    if (this.modelLegumesProduct.title === 'Beans' || this.modelLegumesProduct.title === 'Lentils' || this.modelLegumesProduct.title === 'Rice' || this.modelLegumesProduct.title === 'Chickpeas') {
      this.legumes = this.modelLegumesProduct.title
      dataForSearch.allProducts.push(this.legumes)
    }


    input = dataForSearch


    this.recipeService
      .searchRecipe(input)
      .subscribe(data => {
        dataForSearch.allProducts.splice(0)
        this.result = data

      })
  }

}
