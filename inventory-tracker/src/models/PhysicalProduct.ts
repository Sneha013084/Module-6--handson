
 import Product from './Product';
 
  export class PhysicalProduct extends Product{
    weight : number;
  
    constructor( sku :string , name : string, price : number, taxRate: number, weight : number){
        super( sku, name, price, taxRate);
        this.weight = weight;
    }
      override  getPriceWithTax(): number{

        const taxRate = .10;
        return this.price*(taxRate + 1);

      }
      get formattedWeight() :string{
         return `${this.weight} kg.`
      }
       public override displayDetails(): string {

        return `${super.displayDetails()}  Weight =  ${this.formattedWeight}`;
          
      }
}