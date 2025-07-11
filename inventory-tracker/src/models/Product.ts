
 export default class Product{
    private sku : string;
    public name : string;
    protected price : number;
    public taxRate : number;
    

    constructor(sku :string, name :string, price :number, taxRate :number){
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.taxRate = taxRate;
    
    }
    public getPrice(): number {
        return this.price;
    }

    public displayDetails() :string {
        return `${this.sku}  ${this.name} Cost =  $${this.price.toFixed(2)}`;
    }

    getPriceWithTax(): number {
        return this.price;
    }
}