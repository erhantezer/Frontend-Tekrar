//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log('******* LOOPS IN ARRAYS ******');

const islemler = [-3000, 4500, -2200, -6000, 9000];

const isToplami = () => {
    let yatirma = 0;
    let cekme = 0;
    for (let i=0; i < islemler.length; i++) {
        if (islemler[i] >= 0) {
            yatirma +=islemler[i]
        } else {
            cekme += islemler[i]
        }
    };
    return `Toplam yatirma: ${yatirma}, Toplam Cekme:${-cekme}`;
};

console.log(isToplami());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------
