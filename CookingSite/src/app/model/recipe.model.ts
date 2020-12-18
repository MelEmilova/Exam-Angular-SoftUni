import { productQuantitiesModel } from './productQuantities.model'

export class RecipeModel {
  constructor(
    public _id: any,
    public title: string,
    public description: string,
    public imageUrl: string,
    public productQuantities: productQuantitiesModel
  ) { }
}