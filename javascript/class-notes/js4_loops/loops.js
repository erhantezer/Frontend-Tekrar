
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

//! ********************** DO-WHILE *************************