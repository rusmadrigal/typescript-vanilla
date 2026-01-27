const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA',
        zip: '10001'
    }
}

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;

console.log(ironman, spiderman);