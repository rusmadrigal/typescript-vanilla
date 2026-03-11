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

