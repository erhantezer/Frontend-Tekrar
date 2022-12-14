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

//!Okuma
const js = diller[1];
console.log(js);

//!Diziye Yazma
isimler[2] = "Kemal";
console.log(isimler)

//! Hata,const keyword'u ile tanımlanmış bir diziye tamamıyla bir atama yapılmaz.
// isimler = ['Can', 'Canan', 'Cavidan'];
// console.log(isimler);
//!Uncaught TypeError: Assignment to constant variable.

const yaslar = [22, 33, 44];
const kisiler = ['Ahmet', 'Yilmaz', 2022, 2022 - 1970, true, 5.6, yaslar];
console.log(kisiler);

console.log(kisiler[6][1]);

const sonYas = ++kisiler[6][2];
console.log(sonYas, kisiler); //! 45

const orta = kisiler[6][1]++;
console.log(orta); //! 44
console.log(kisiler); //! kisilerdeki yaslar içinde 1. değer 45 olur

//? ===========================================================
//?  DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = ['BMW', 'Prosche', 'Mercedes', 'Fiat'];

//* pop() son elemanı siler ve sildiği elemanı döndürüyor.
const deleted = cars.pop();
console.log(cars, 'Silinen:', deleted);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const n = cars.push("Volvo")
console.log(cars, n)

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const u = cars.unshift("Audi")
console.log(cars, u);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const s = cars.shift();
console.log(s,cars)

//* Dizinin tamamini ters sıraya cevirdi.
const ters = cars.reverse();
console.log(ters);

//* sort() Diziyi alfabetik olarak siralar.
const sirala = cars.sort();
console.log(sirala);

const rakamlar = [3, 5, 1, 10, 55];
console.log(rakamlar.sort()); //! Alfabetik sıralıdığı için doğru sonuç çıkmayabilir.
//! [1, 10, 3, 5, 55]

console.log(rakamlar.sort((a, b) => a - b)); //! [1, 3, 5, 10, 55]


cars.splice(2,1,"Anadol");//! 2. indistekini Anadol olarak değiştir (Elamn sayisi değişmez)
console.log(cars); 

cars.splice(1,0, "Vosvos"); //! 1. indise Vosvos ekle (eleman sayisi bir artar)
console.log(cars);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI
//? ===========================================================

const sayilar1 = [3, 5, 2, '2', 'üc', 2, 'bes', 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

//* ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar1.indexOf(2);
console.log("2'nin son indeksi:", sayilar1.lastIndexOf(2)); //5
console.log("2'nin son ilk indeksi:", ikiIndeks); //2

//* Ornek
//*-----------------------------------------------------------
const arananString = prompt("Aranan sayiyi giriniz:");
const arananNumber = Number(arananString)

let bulunduMu = false;
if (sayilar1.includes(arananString)) {
    console.log("Arananın String'in indeksi:",sayilar1.indexOf(arananString));
    bulunduMu = true;
}
if (sayilar1.includes(arananNumber)) {
    console.log('Arananın Sayinin indeksi:', sayilar1.indexOf(arananNumber));
    bulunduMu = true;
}
if (!bulunduMu) {
    console.log("Aranan bulunamamıştır");
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.

// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

const stringSayilar1 = sayilar1.join(',');
console.log(stringSayilar1)

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

const stringSayilar2 = sayilar1.toString();
console.log(stringSayilar2);

//* slice()
//*-----------------------------------------------------------

const arabalar = ['bmw', 'mercedes', 'audi', 'ferrari', 'anadol'];
const sliced1 = arabalar.slice(2);
console.log(sliced1);

const sliced2 = arabalar.slice(1, 3); // start: inclusive, stop :exclusive
console.log(sliced2);

//* concat()
//*-----------------------------------------------------------
const yazilar = ['a', 'b', 'ad', 'soyad', 'yas'];
const numbersArray = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(
    true,
    numbersArray,
    false,
    ['a', 'b', 'c'],
    [['x', 'y', 'z']] //nested
  );
  console.log(birlesik);

const birles = [...yazilar, ...numbersArray];
console.log(birles);
