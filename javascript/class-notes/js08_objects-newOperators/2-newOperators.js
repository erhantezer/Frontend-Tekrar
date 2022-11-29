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