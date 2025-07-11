import Product from "../models/Product";

export default function calculateTax(product:Product): number {
   const tax = product.getPrice() * product.taxRate;
   return product.getPrice() + Number(tax.toFixed(2));
}


 interface ProductInterface {
    sku: string;
    name: string;
    price: number;
    taxRate: number;
    getPrice(): number;
    getPriceWithTax(): number;
    displayDetails(): string;
}