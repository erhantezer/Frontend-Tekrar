// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log('***** ARRAYS ******');

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["Erhan", "Mehmet", "Ali", "Kasım"];
console.log(isimler);
console.log(isimler.length); //? 4

// ! 2.Yöntem (Object Constructor)
const diller = new Array("Python", "JS", "Go", "Java");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const sayilar = new Array(10)
//! 10 elemanlık boş bir array oluşturdu
console.log(sayilar); //! [empty × 10]

//* Diziden Veri Okuma-Yazma
//* ---------------------------------------------------------