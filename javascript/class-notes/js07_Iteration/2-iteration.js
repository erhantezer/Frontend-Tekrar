
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
console.log(fiyatlarx);

//* ======================================================
//*                       MAP METHOD
//* ======================================================
//! map array haline getirir return yapısı içerir
//*-------------- ÖRNEK -------------------
//* isimler dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const isimler = [
    'Ahmet',
    'mehmet',
    'ismet',
    'SAFFET',
    'Can',
    'Canan',
    'Cavidan',
];
console.log(isimler);
console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

const kücükIsimler = isimler.map((isim) => isim.toLocaleLowerCase());
console.log(kücükIsimler);

//*-------------- ÖRNEK -------------------

const buyukIsimler = isimler.map((isim, indis, dizi) => {
    dizi[indis] = isim.toLocaleLowerCase(); //! Orjinal diziyi değiştirdik.
    return isim.toLocaleUpperCase();
})
console.log(buyukIsimler);
console.log(isimler);


//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//! Tüm isimleri büyük harfe çevirip konsolda yazdiriniz.
isimler.map((isim) => isim.toLocaleUpperCase()).forEach((ad) =>console.log(ad))

//* map() metodundan sonra eğer forEach gibi bir terminal(consumer) işlemi
//* kullanılırsa yazılan ifade bir dizi döndürmemiş olur.


//* ======================================================
//*                       FILTER METHOD
//* ======================================================

const isimlerrr = [
    'Ahmet',
    'mehmet',
    'ismet',
    'SAFFET',
    'Can',
    'Canan',
    'Cavidan',
];

isimlerrr.filter((isim) => isim === "Ahmet")
.map((ad) => ad.toLocaleUpperCase())
.forEach((isim) =>console.log(`İSİM: ${isim}`));

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
const fiyatlarrr = [100, 250, 50, 89];

const filter250 = fiyatlarrr.filter((fiyat) => fiyat < 250)
console.log(filter250);


//*-------------- ÖDEV -------------------
const fiyatlarr = [100, 250, 50, 89];

//* 1) fiyatlarr dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.
fiyatlarr.filter((fiyat) => fiyat > 90).forEach((yaz) => console.log(yaz));

console.log("***************************")
//* 2) fiyatlarr dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.
fiyatlarr
.filter((fiyat) => fiyat < 110)
.map((artıs) => artıs*1.1)
.forEach((yazdir) => console.log(Math.round(yazdir)));

console.log("***************************")

//* 3) maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

const dusuk4000 = maaslar.filter((maas) => maas < 4000).map((zam) => zam*1.5);
console.log(dusuk4000);

console.log("***************************");

//* 4) Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

maaslar.filter((maas) => maas > 4000).forEach((yaz) => console.log(`Zamlı : ${yaz*1.25}`))


//* ======================================================
//*                       REDUCE METHOD
//* ======================================================

//* 5) maas toplamini bulunuz.
const toplamMaas = maaslar.reduce((t,m) => t + m, 0)
console.log(`Toplam maaş: ${toplamMaas}`)

//* 6) maasi ortalamanin altinda olanlara %20 zam yapalim.
const zamlı = maaslar.filter((maas) => maas < toplamMaas/maaslar.length).map((zam) => zam*1.2);
console.log(zamlı)