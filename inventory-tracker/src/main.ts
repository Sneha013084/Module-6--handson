import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import calculateTax from './utils/taxCalculator';

//create product instances"


const products = [
    new PhysicalProduct ('A01', 'Table', 1000, 10, 2.5),
    new DigitalProduct  ('A02', 'Pendrive',100, 0, 256)
];

for (const product of products){
    const physical = product as PhysicalProduct;
    console.log(product.displayDetails());
    if( product instanceof PhysicalProduct){
        console.log(`Final Price with Tax  = $${calculateTax(product).toFixed(2)}`);

    }else if (product instanceof DigitalProduct){
        console.log(`Final Price with Tax  = $${product.getPriceWithTax().toFixed(2)}`);
    }
   
}

