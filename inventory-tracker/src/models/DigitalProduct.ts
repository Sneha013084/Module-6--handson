
import Product from './Product';

export class DigitalProduct extends Product{
        fileSize : number;

 constructor( sku :string , name : string, price : number, taxRate: number, fileSize: number){
        super( sku, name, price,taxRate);
        this.fileSize = fileSize;
 }     
      getPriceWithTax():number{
    return this.price;
 } 
   get formattedFileSize (): string{
    return `${this.fileSize} MB`;
   }
   public override displayDetails(): string {
       
       return `${super.displayDetails()}  Size =  ${this.formattedFileSize}`;
   }
}
