//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
const bekle = (ms) => {
    //! blocking-code
    const start =new Date().getTime();
    // console.log(start);
    while(new Date().getTime() < start + ms){}
    //! wihile ile 3sn beklemesini sağlıyoruz
}

console.log("hello");
alert("ITF"); //! blocking-code
console.time("timer")
bekle(3000)
console.timeEnd("timer")
console.log('FS11');

//* Asenkron (setTimeout)
//* ---------------------------------------------------------------
