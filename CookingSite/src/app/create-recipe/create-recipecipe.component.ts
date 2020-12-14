import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RecipesService } from '../service/recipes.service';

import { RecipeModel } from '../model/recipe.model'
import { productQuantitiesModel } from '../model/productQuantities.model'
import { ProductModel } from '../model/product.model'

import { ProductMeatModel } from '../model/productMeat.model'
import { productMeatQuantModel } from '../model/productMeatQuont.model'

import { ProductVegetableModel } from '../model/productVegetable.model'
import { ProductVegetableQuantModel } from '../model/productVegetableQuont.model'

import { ProductDairyModel } from "../model/productDairy.model"
import { productDairyQuantModel } from '../model/productDairyQuant.model'

import { ProductLegumesModel } from '../model/productLegumes.model'
import { productLegumesQuantModel } from '../model/productLegumesQuant.model'


let resultQuon = []

@Component({
  selector: 'app-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  modelProduct: ProductModel
  modelQuontity: productQuantitiesModel
  modelRecipe: RecipeModel

  modelMeatProduct: ProductMeatModel
  modelMeatQuont: productMeatQuantModel

  modelVegetableProduct: ProductVegetableModel
  modelVegetableQuont: ProductVegetableQuantModel

  modelDairyProduct: ProductDairyModel
  modelDairyQuant: productDairyQuantModel

  modelLegumesProduct: ProductLegumesModel
  modelLegumesQuant: productLegumesQuantModel

  resultMeat;
  resultMeatId: string
  resultVeg;
  resultVegId: string
  resultDairy;
  resultDairyId: string
  resultLegumes;
  resultLegumesId: string


  allproducts;
  allMeat;
  allVegetables;
  allDairy;
  allLegumes;
  

  productList = [];
  quantList = []
  quantListType=[]

  neededIdMeat;
  neededIdVegetables;
  neededIdDairy;
  neededIdLegumes;

  currentValTitle = "";
  currentValDescrip = "";
  currentValImg = "";

  result;
  


  recipeForFetch = {
    title: "",
    description: "",
    imageUrl: "",
    productQuantities: []
  }

  constructor(
    private recipeService: RecipesService,
    private router: Router) {
    this.modelRecipe = new RecipeModel('', '', '', this.modelQuontity)
    this.modelQuontity = new productQuantitiesModel('', '', this.modelProduct)
    this.modelProduct = new ProductModel('', '')

    this.modelMeatProduct = new ProductMeatModel('', 'MEAT')
    this.modelMeatQuont = new productMeatQuantModel('', '', '')

    this.modelVegetableProduct = new ProductVegetableModel('', 'VEGETABLES')
    this.modelVegetableQuont = new ProductVegetableQuantModel('', '', '')

    this.modelDairyProduct = new ProductDairyModel('', 'DAIRY')
    this.modelDairyQuant = new productDairyQuantModel('', '', '')

    this.modelLegumesProduct = new ProductLegumesModel('', 'LEGUMES')
    this.modelLegumesQuant = new productLegumesQuantModel('','','')


  }
  ngOnInit(): void {

  }

  getValTitle(val) {
    this.currentValTitle = val;
    console.log(this.currentValTitle);
    this.recipeForFetch.title = this.currentValTitle
  }


  getValDescrip(val) {
    this.currentValDescrip = val;
    this.recipeForFetch.description = this.currentValDescrip

  }

  getValImg(val) {
    this.currentValImg = val;
    this.recipeForFetch.imageUrl = this.currentValImg
  }

  CreateQuontit() {
    resultQuon.splice(0)
    this.recipeService
      .getAllProducts()
      .subscribe(dataAllPrd => {

        this.allproducts = dataAllPrd
        console.log("All Products", this.allproducts);

        this.allMeat = this.allproducts.MEAT
        this.allVegetables = this.allproducts.VEGETABLES
        this.allDairy = this.allproducts.DAIRY
        this.allLegumes = this.allproducts.LEGUMES


        this.allMeat.forEach(element => {
          if (element.title === this.modelMeatProduct.title) {
          this.productList.push(element.title)
          this.quantList.push(this.modelMeatQuont.quantity)
          this.quantListType.push(this.modelMeatQuont.quantityType)
            this.neededIdMeat = element._id

            this.modelMeatQuont.product = this.neededIdMeat

            if (this.modelMeatQuont.product.length === undefined) {

            } else {
              this.recipeService
                .createQuontM(this.modelMeatQuont)
                .subscribe(dataQ => {
                  this.resultMeat = dataQ
                  console.log('dataQ', dataQ);
                  this.resultMeatId = this.resultMeat._id
                  resultQuon.push(this.resultMeatId)
                })
            }
          }
        });


        this.allVegetables.forEach(element => {
          if (element.title === this.modelVegetableProduct.title) {
            this.productList.push(element.title)
          this.quantList.push(this.modelVegetableQuont.quantity)
          this.quantListType.push(this.modelVegetableQuont.quantityType)
            this.neededIdVegetables = element._id

            this.modelVegetableQuont.product = this.neededIdVegetables

            if (this.modelVegetableQuont.product.length === undefined) {

            } else {

              this.recipeService
                .createQuontV(this.modelVegetableQuont)
                .subscribe(dataQ => {
                  this.resultVeg = dataQ
                  this.resultVegId = this.resultVeg._id
                  resultQuon.push(this.resultVegId)
                })
            }
          }
        });


        this.allDairy.forEach(element => {
          if (element.title === this.modelDairyProduct.title) {
            this.productList.push(element.title)
            this.quantList.push(this.modelDairyQuant.quantity)
            this.quantListType.push(this.modelDairyQuant.quantityType)
            this.neededIdDairy = element._id

            this.modelDairyQuant.product = this.neededIdDairy

            if (this.modelDairyQuant.product.length === undefined) {

            } else {
              this.recipeService
                .createQuontD(this.modelDairyQuant)
                .subscribe(dataQ => {
                  this.resultDairy = dataQ
                  this.resultDairyId = this.resultDairy._id
                  resultQuon.push(this.resultDairyId)
                })
            }
          }
        });




        this.allLegumes.forEach(element => {
          if (element.title === this.modelLegumesProduct.title) {
            this.productList.push(element.title)
            this.quantList.push(this.modelLegumesQuant.quantity)
            this.quantListType.push(this.modelLegumesQuant.quantityType)
            this.neededIdLegumes = element._id

            this.modelLegumesQuant.product = this.neededIdLegumes

            if (this.modelLegumesQuant.product.length === undefined) {

            } else {

              this.recipeService
                .createQuontL(this.modelLegumesQuant)
                .subscribe(dataQ => {
                  this.resultLegumes = dataQ
                  this.resultLegumesId = this.resultLegumes._id
                  resultQuon.push(this.resultLegumesId)
                })
            }
          }
        });

        this.recipeForFetch.productQuantities = resultQuon

      });
  }

  createRecipe() {
    this.recipeService
      .createRecipe(this.recipeForFetch)
      .subscribe(data => {
        console.log("Recipe Succsses", data );
      })
  }
}
