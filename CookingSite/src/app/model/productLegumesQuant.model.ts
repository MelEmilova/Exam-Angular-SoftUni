import { ProductModel } from './product.model';


  export class productLegumesQuantModel{

    constructor(
      public quantity: string,
      public quantityType:string,
      public product: string
    ){}
  }