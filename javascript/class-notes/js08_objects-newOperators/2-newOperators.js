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



