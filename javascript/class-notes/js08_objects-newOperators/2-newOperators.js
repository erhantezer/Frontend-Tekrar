//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
console.log('****** NEW OPERATORS *******');

const car = {
    name:"BMW",
    model:1990,
    engine:1.6,
}

// //* 1.YONTEM (Classical)
console.log(car.model);
console.log(car["name"]);

// //* 2.YONTEM: DESTRUCTURING
const {name, model, engine} = car;
console.log(name, model, engine);

// //* EXAMPLE: NESTED
const cars = {
    car1: {
        name: 'BMW',
        model: 1990,
        engine: 1.6,
    },
    car2: {
        name: 'Mercedes',
        model: 2022,
        engine: 2.0,
    },
};

const {car1, car2} = cars;
console.log(car1, car2);

const {name:name1, model:model1, engine:engine1} = car1;
const {name:name2, model:model2, engine:engine2} = car2;
console.log(name1, model1, engine1);
console.log(name2, model2, engine2);



const kisiler = [
    {
        name: 'Ahmet',
        surname: 'Can',
        job: 'developer',
        age: 30,
    },
    {
        name: 'Mehmet',
        surname: 'Baki',
        job: 'tester',
        age: 35,
    },
    {
        name: 'Ruzgar',
        surname: 'Kuzey',
        job: 'tester',
        age: 24,
    },
];

kisiler.forEach((kisi) => {
    console.log('*********************');
    console.log('NAME:', kisi.name);
    console.log('SURNAME:', kisi.surname);
    console.log('JOB:', kisi.job);
    console.log('AGE:', kisi['age']);
});

kisiler.forEach((kisi) => {
    console.log('*********************');
    const { name, job, surname, age } = kisi; //?DESTRUCTURING
    console.log('NAME:', name);
    console.log('SURNAME:', surname);
    console.log('JOB:', job);
    console.log('AGE:', age);
});

//* function
function getInfo() {
    return {
        id:99,
        nameee: "Apple",
        price:20000,
    }
};

const {id, nameee, price} = getInfo(); //? DESTRUCTURING
console.log(id, nameee, price);


//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (ARRAY)
//* ======================================================

const names = ['Ahmet', 'Mehmet', 'İsmet', 'Saffet'];

/* Classical method*/
const name10 = names[0]; //Ahmet
const name20 = names[1]; //Mehmet

const [person1, person2, , person4] = names;
console.log(person1, person2, person4);


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//* REST: (Arrays) */ geri kalanı yazma
const vehicles = ['bmw', 'reno', 'mercedes', 'ferrari', 'anadol'];

const [vec1, vec2, ...restVehicles] = vehicles;

console.log(vec1, vec2);
console.log(restVehicles);

//* REST (Objects) geri kalanı yazma
const personel = {
    pName: 'john',
    surname: 'smith',
    job: 'developer',
    age: 30,
};

const { pName, job, ...surnameAge } = personel;
console.log(pName, job, surnameAge);

//* REST (Function Arguments) geri kalanı yazma