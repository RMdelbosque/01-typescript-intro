
export function whatsMyType<T> ( argumen: T ): T {

    return argumen;
}


let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray  = whatsMyType<number[]>([1,2,3,4,5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );