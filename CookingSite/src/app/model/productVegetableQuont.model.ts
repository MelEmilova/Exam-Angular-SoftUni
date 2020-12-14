import { ProductModel } from './product.model';


  export class ProductVegetableQuantModel{

    constructor(
      public quantity: string,
      public quantityType:string,
      public product: string
    ){}
  }