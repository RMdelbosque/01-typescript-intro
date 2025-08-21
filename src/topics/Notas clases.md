## Desestructuración

Cuando tenemos una constante con multiples variables porque sale de un interface, podemos llamarlo de una forma más reducida con la desestructuración.

```const { song } = audioPlayer; 
const { songDuration } = audioPlayer;
const { author } = audioPlayer.details;

console.log('Song: ', song)
console.log('Duration: ', songDuration)
console.log('Author: ', author)
```

Con "const { author } = audioPlayer", estamos sacando la variable author de la cosntante audioPlayer. Es como si escribieramos "const author = audioPlayer.author"

Cuando tenemos una función, podemos desestructurarlo de varias formas, dentro de la función cuando le asfignamos la interfaz o con una constante dentro. 
Si usamos 
```function taxCalculation( { tax, products }: TaxCalculationOptions): [number, number] {}```

Estamos desestructurando tax y products de la interfaz TaxCalculationOptions. Esto nos sirve cuando son pocas variabes las que tenemos. Así que lo mejor sería hacerlo con una constante dentro de la función:


```
function taxCalculation( options : TaxCalculationOptions): [number, number] {

    const {tax, products} = options;
}
```
Estamos llamando a todo TaxCalculationOptions en options y dentro, con una constante, desestructuramos esas dos variables que queramos.

Otra forma de desestructurar es indicándole el nombre de cada posición en un array:

```
const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    //tax: tax, //Al llamarse igual la constante a la variable de la interface, puedes poner solo "tax"
    tax,
});
```

Un ejemplo sencillo de un atray de strrings con personajes de DBZ:

```
const [p1, p2, trunks, otro = 'Not found']: string[] = ['Goku', 'Vegeta','Trunks'];
```