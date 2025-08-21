import type { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shopingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

// tax = 0.15
const [ total, tax ] = taxCalculation ({
    products: shopingCart,
    tax: 0.15
});

console.log('Total2', total );
console.log('Tax2', tax );