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

const names = ['Ahmet', 'Mehmet', '??smet', 'Saffet'];

/* Classical method*/
const name10 = names[0]; //Ahmet
const name20 = names[1]; //Mehmet

const [person1, person2, , person4] = names;
console.log(person1, person2, person4);


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//* REST: (Arrays) */ geri kalan?? yazma
const vehicles = ['bmw', 'reno', 'mercedes', 'ferrari', 'anadol'];

const [vec1, vec2, ...restVehicles] = vehicles;

console.log(vec1, vec2);
console.log(restVehicles);

//* REST (Objects) geri kalan?? yazma
const personel = {
    pName: 'john',
    surname: 'smith',
    job: 'developer',
    age: 30,
};

const { pName, job, ...surnameAge } = personel;
console.log(pName, job, surnameAge);

//* REST (Function Arguments) geri kalan?? yazma
const topla = (x, y) => {
    return x+y;
};

//? hata vermez fakat sadece 2 arg??man?? toplar
console.log(topla(1, 2, 3, 4, 5, 6));

const hepsiniTopla = (...sayilar) => {
    let toplam=0;
    console.log(sayilar);  //? [1, 2, 3, 4, 5, 6]
    sayilar.forEach((sayi) => toplam += sayi);
    return toplam;
}

console.log(hepsiniTopla(1, 2, 3, 4, 5, 6));


//? ------------------------------------------------------
//?  SPREAD (a??ma)
//? ------------------------------------------------------

const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
const otomobiller = ['T??r', 'Otobus', 'Araba', 'SUV'];

const tumAraclar = [...araclar, ...otomobiller];
console.log(tumAraclar);

//* Example
const meyveler = ['cherry', 'pear', 'apricot', 'raisin'];
const turunclar = ['mandalin', ...meyveler, 'lime', 'orange'];
console.log(turunclar);

//* Ornek (String spread) A??MA ????LEM??
let str = "Hello FS";
console.log([...str]) //! ['H', 'e', 'l', 'l', 'o', ' ', 'F', 'S']
console.log(...str) //! H e l l o   F S
console.log(Array.from(str)); //! ['H', 'e', 'l', 'l', 'o', ' ', 'F', 'S']

//* Ornek (max)
console.log(Math.max(1, 3, 9, 5));

const rakamlar = [1, 3, 9, 5];
console.log(...rakamlar);
console.log('MAX:', Math.max(...rakamlar));