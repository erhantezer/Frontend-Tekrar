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
// const bekle = (ms) => {
//     //! blocking-code
//     const start =new Date().getTime();
//     console.log(start);
//     while(new Date().getTime() < start + ms){}
//     //! wihile ile 3sn beklemesini sağlıyoruz
// }

// console.log("hello");
// alert("ITF"); //! blocking-code
// console.time("timer")
// bekle(3000)
// console.timeEnd("timer")
// console.log('FS11');

//* Asenkron (setTimeout)
//* ---------------------------------------------------------------
//! macro task kuyrugu
// setTimeout(() => {
    //! non-blocking code
//     console.log("hello Erhan");
// },3000);

// //! micro task kuyrugu
// console.log("hello Kazım");
// console.log("Merhaba");

// setTimeout(() => {
    //! non-blocking code
//     console.log("Yavrum nerdesin")
// },1000);


//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------------
// console.log("Counter Started");
// let counter = 1;

// const sec1 = setInterval(() => {
//     console.log(counter++);
//     if(counter > 10){
//         clearInterval(sec1)
//     }
    
// }, 1000);

// console.log("Counter Finished");


//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() =>{
    console.log("John: Hi");
    setTimeout(() =>{
        console.log("Sarah:Hello");
        setTimeout(() =>{
            console.log("John: How are you?");
            setTimeout(() =>{
                console.log("Sarah: I'm fine and you?");
                setTimeout(() =>{
                    console.log("John: Thanks I'm good");
                },2000);
            },2000);
        },2000);
    },2000);
},2000);

//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)