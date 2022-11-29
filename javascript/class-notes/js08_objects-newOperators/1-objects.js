//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu
//? bölgelere indeksleme ile erişebiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured)ihtiyaçalrımız
//? için Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapısı kullanılır.
//? Herhangi bir veriyi erişmemk için property (key) adı kullanılır.

console.log('******* Objects *********');

//! 3 farklı yöntem ile Object oluşturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const araclar = new Object();
araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

//! Read
console.log(araclar);
console.log(araclar.motor); //? . notasyon => 1.3
console.log(araclar["model"]); //? square bracket notasyonu => 2022

//* ----------------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ----------------------------------------------------------------

//* Object constructor

function Personel(id, ad, maas) {
    this.perId = id;
    this.perAdi = ad;
    this.perMaas = maas;
    console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, 'Ahmet', 75000);
const canan = new Personel(102, 'Canan', 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! window objesine bağlanmıştır

//* ---------------------------------------------------------
//* 3- Object literal (En çok tercih edilen yöntem)
//* ---------------------------------------------------------

const calisan = {
    ad: 'Ahmet',
    soyad: 'Yilmaz',
    yas: 30,
    is: 'developer',
    diller: ['C', 'C++', 'Pyhton', 'JS'],
    maas: 120000,
};


console.log(calisan);
console.log(calisan.yas);
console.log(calisan.diller); //? ['C', 'C++', 'Pyhton', 'JS']
console.log(calisan.diller[3]); //? JS
console.log(calisan[1]); //? undefined



calisan.konum = 'Turkey';
calisan.email = 'ahmet@gmail.com';
calisan['dogum'] = 1990;
console.log(calisan);

const isci = calisan;
isci.maas =50000;
console.log(isci, calisan)

//* ======================================================
//*              Object Metotları
//* ======================================================

const kisi = {
    ad: "Can",
    soyad: "Canan",
    meslek: "developer",
    ehliyet: true,
    yasHesapla: function () {
        return
    }
}