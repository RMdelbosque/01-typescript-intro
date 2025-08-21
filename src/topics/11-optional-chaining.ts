
export interface  Passenger {
    name: string;
    childern?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}
const passenger2: Passenger = {
    name: 'Melissa',
    childern: ['Natalia', 'Elizabeth'],
}


const returnChildrenNumber = ( passenger: Passenger ): number => {

    const {name} = passenger;

    const howManyChildren = passenger.childern?.length || 0; //En vez de usar un if, con "|| 0", le decimos que si nos devuelve undefined, en vez de eso, hace otra función, en este caso devuelve 0
    // const howManyChildren = passenger.childern!.length

    console.log( name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber( passenger1 );