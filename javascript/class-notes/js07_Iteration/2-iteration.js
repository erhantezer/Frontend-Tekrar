
//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log('****** ITERATION **********');

//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];


function yazdir(value) {
    console.log(value)
}
fiyatlar.forEach(yazdir)

console.log('***************************');

//! Arrow function kullanılarak çözüm
fiyatlar.forEach((x) => console.log(x));


//** Fiyatlar dizisindekilerin toplamini konsola yazdiriniz */
let toplam = 0;
fiyatlar.forEach((k) => toplam += k );

console.log("Toplam:",toplam);

//! NOT: forEach metodu void bir metottur.
//! (Yani herhangi bir değer döndürmez.)
console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat))); //!undefined

//*-------------- ÖRNEK -------------------
let toplam1 = 0;
fiyatlar.forEach((deger, indis, dizi) => {
    toplam1 +=deger;
    console.log(`${indis}. iterasyon toplami: ${toplam1}`);
    dizi[indis] = deger + 10
})
console.log(fiyatlar);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.
const fiyatlarx = [100, 250, 50, 89];
fiyatlarx.forEach((fiyat, indis, dizi) => {
    dizi[indis] = Math.round(fiyat * 1.1);
})
console.log(fiyatlarx)