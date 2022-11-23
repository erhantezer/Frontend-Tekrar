//? console.log('**********\nSession 3 - Conditionals\n**********');
// ! if statement example
// check if the is positive

// const n1 = +prompt("Enter a number:");
// console.log(n1, typeof n1);
// if(n1>0){
// console.log(`${n1} is positive number`);
// }else if(n1<0) {
// console.log(`${n1} is negative number`);
// }else {
// console.log(`The number is 0`);
// }

// ! example 2 chest size
// https://www.perryellis.com/pages/size-chart

// suggest size for men as XS S M L XL XXL on chest size
// const chest = +prompt("Omuz ölcünüzü giriniz:");
// const size = +prompt("Beden ölçünüzü giriniz:");

// if(size<32) {
// console.log("Wrong size");
// }
// else if (size>=32 && size<=35) {
// console.log("XS");
// }
// else if(size>=36 && size<=38){
// console.log("S");
// }
// else{
// console.log(` Beden numarası ${size} gelecek`);
// }


// ! example 2 three number comparison
// Write a JavaScript program that accept three integers and display the greatest.

// const n1 = Number(prompt("Enter n1 Number:"));
// const n2 = Number(prompt("Enter n2 Number:"));
// const n3 = Number(prompt("Enter n3 Number:"));

// if(n1>n2 && n1>n3){
//     console.log(`n1= ${n1} En büyük sayıdır`);
// }else if(n2>n3 && n2>n1){
//     console.log(`n2= ${n2} En büyük sayıdır`);
// }else{
//     console.log(`n3= ${n3} en büyük sayıdır`)
// }


// ! ternary examples
// console.log('----------\nternary if statements\n----------');

// program to check pass or fail

// let grade = +prompt("Enter your score:)");

// const not = grade>50 ? "Pass" : "Fail";
// console.log(not);


// let num = +prompt("Enter your number:)");
// const result = num>=0 ? (num==0 ? "Sıfır" : "Positif") : "Negatif";
// console.log(result)


// ! example-4 canDrive
// let canDrive = false;
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isHandicapped = false;
// const usingRegularCar = true;

// const result =
//   hasDriversLicense && hasGoodVision ? !isHandicapped ? 'can drive' : !usingRegularCar ? 'can drive' : 'cannot drive' : 'cannot drive';
// console.log(result);


//? console.log('----------\nswitch case statements\n----------');

// let text;
// let fruit = prompt('what type your favorite fruit example:banana, orange, apple...');
// banana, lime, limon, orange, apple, default 

// switch (fruit.toLocaleLowerCase()) {
//     case "banana":
//         text ="I like banana 🍌"
//         break;
//     case "watermelon 🍉":
//         text ="I like watermelon"
//         break;
//     case "apple 🍎":
//         text ="I like banana"
//         break;
//     case "chery 🍒":
//         text ="I like banana"
//         break;
//     case 'lime 🍋🍈🥭':
//     case 'lemon':
//     case 'orange':
//         text = `I am not a fan of ${fruit}`;
//         break;

//     default:
//         text = "I don't know that fruit 🥞";
// }
// console.log(text);


// ! example-5  cw weekly program ❗your turn 🧑‍💻
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.

// const day= prompt("Bir gün giriniz example:monday").toLocaleLowerCase();

// switch (day) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//         console.log("inclass")
//         break;
//     case "friday":
//         console.log("teamwork");
//         break;
//     case "saturday":
//         console.log("inclass + workshop");
//         break;
//     case "sunday":
//         console.log("self study");
//         break;
//     default:
//         console.log("yanlış gün giirdiniz")
// }


//!leap year
// let year = +prompt("Enter a year")
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     console.log(`${year} are leap years`);
// }else {
//     console.log(`${year} aren't leap years`)
// }