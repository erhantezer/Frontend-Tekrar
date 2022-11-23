console.log('**********\nSession 3 - Conditionals\n**********');
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
const size = +prompt("Beden ölçünüzü giriniz:");

if(size<32) {
console.log("Wrong size");
}
else if (size>=32 && size<=35) {
console.log("XS");
}
else if(size>=36 && size<=38){
console.log("S");
}
else{
console.log(` Beden numarası ${size} gelecek`);
}


