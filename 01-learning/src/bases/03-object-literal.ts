interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: {
        city: string;
        state: string;
        country: string;
        zip: number;
    }
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA',
        zip: 123
    }
}

console.log(ironman);

//const spiderman = structuredClone(ironman);

//spiderman.firstName = 'Peter';
//spiderman.lastName = 'Parker';
//spiderman.age = 22;

//console.log(ironman, spiderman);
