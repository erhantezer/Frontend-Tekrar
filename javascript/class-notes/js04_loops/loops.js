
console.log('****** LOOPS *******');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//! ************************ FOR ****************************
// Math.floor() => aşağıya yuvarlar
// Math.ceil() => yukarıya yuvarlar
// Math.round() => değere göre yuvarlar
// Math.trunc() => sayının tam kısmını alır

// for (let i = 0; i < 10; i++) {
//     const randomNumber= Math.round(Math.random()*100 +1);
//     console.log(randomNumber);
// }

// console.log("Program bitti")

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

// const n = +prompt("n sayisini giriniz:")

// let toplam=0;
// for (let i = 1; i <= n ; i++) {
//     console.log(i)
//     toplam += i;
// }
// console.log('Toplam:', toplam);
// console.log(n*(n+1)/2);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const  sayi = +prompt("Bir sayı giriniz");

//? çözüm1

// for (let  i= 2; i < sayi+1; i++) {
//     if(sayi%i == 0 && sayi!=2) {
//         console.log(`${sayi} asal değildir`);
//         break;
//     } 
//     else{
//         console.log(`${sayi} asal dır`);
//         break;
//     }  
// }

//? çözüm2

// const  sayi = +prompt("Bir sayı giriniz");
// const asalMı = (sayi) => {
// let asal=true;
// for (let i = 2; i < sayi; i++) {
//     if(sayi%i == 0){
//         asal=false;
//         break;
//         }
//     }
//     return asal ? "ASAL" : "ASAL DEGIL";
// }
// console.log(`${sayi} ${asalMı(sayi)}`);


//! *********************** WHILE ***************************

// let j = 1;
// while (j <= 5) {
//   console.log('Merhaba-', j);
//   j++;
// }
// console.log('Bitti');


// let i = 1;
// do {
//     console.log("Merhaba", i)
//     i++
// }while(i<5);


// let not1 = +prompt('Lütfen notunuzu giriniz (0-100):')

// while(not1<0 || not1>100){
//     alert('Girdiğiniz not 0-100 arasında olmalıdır')
//     not1=+prompt('Lütfen notunuzu giriniz (0-100):')
// }

// console.log("Not", not1);


//! ********************** DO-WHILE *************************

// let not2;

// do {
//   not2 = prompt('Lütfen notunuzu giriniz (0-100):');
//   if (not2 < 0 || not2 > 100) {
//     alert('Girdiğiniz not 0-100 arasında olmalıdır');
//  }
// } while (not2 < 0 || not2 > 100);

// console.log('Girdiğiniz not', not2);

//? ODEV1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

// let charr;
// do{
//  charr = prompt("Bir karakter giriniz")
// //  if(charr!="q" && charr != "Q"){
// //     alert("uygun karakteri giriniz")
// // }
// }while(charr!="q" && charr != "Q");

// console.log("Karakter: ", charr)



// let not3;

// while (not3 != 'q') {
//   not3 = prompt('Lütfen not giriniz veya Q ya basarak çıkınız!').toLowerCase();
// }

// console.log('Q ya basarak çıkış yaptınız !!!');


