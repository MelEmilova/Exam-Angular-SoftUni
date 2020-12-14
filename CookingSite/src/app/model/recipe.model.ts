import { productQuantitiesModel } from './productQuantities.model' 

export class RecipeModel{
  constructor( 
   public title: string,
   public description: string,
   public imageUrl: string,
   public productQuantities: productQuantitiesModel
  ){}
}