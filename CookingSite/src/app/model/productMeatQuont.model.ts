import { ProductModel } from './product.model';


  export class productMeatQuantModel{

    constructor(
      public quantity: string,
      public quantityType:string,
      public product: string
    ){}
  }