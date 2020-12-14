import { ProductModel } from './product.model';


  export class productQuantitiesModel{

    constructor(
      public quantity: string,
      public quantityType:string,
      public product: ProductModel
    ){}
  }