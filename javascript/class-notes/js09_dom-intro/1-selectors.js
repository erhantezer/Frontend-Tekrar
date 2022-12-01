//*===========================================
//*             DOM SELECTORS
//*===========================================

console.log('***** SELECTORS *****');

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1 (Paragraph Style)
//*--------------------------------------------

const header = document.getElementById("header");
console.log(header);

header.style.color = "red";

//* EXAMPLE-2 (Button Style)
//*-------------------------------------------
const buttonn = document.getElementById("btn");
buttonn.style.backgroundColor ="coral"
buttonn.style.color ="black";
buttonn.style.fontSize="1.5rem";
buttonn.style.border="none";
buttonn.style.padding="5px";
buttonn.style.width="5rem";


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*          getElementsByTagName
//*============================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------

const img = document.getElementsByTagName("img");
console.log(img); //! HTMLCollection [img]

//! HTMLCollection da verilere ulaşmak için array bracket yöntemi uygulanır fakat method uygulanamaz

img[0].style.border = "solid";
img[0].style.borderColor = 'red';
img[0].style.transform = 'rotate(-4deg)';


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*          getElementsByClassName
//*===========================================

//* EXAMPLE-4
//* ---------------
const par = document.getElementsByClassName("par");
console.log(par); //! HTMLCollection(2) [p.par, p.par]
// par[0].textContent = "DOM MANÜPİLASYONU";
// par[0].innerText = "DOM DOM DOM";
// par[0].innerHTML = `DOMMMM <img src="" alt="deneme" />`;
par[0].innerHTML += ' <a href="https://www.clarusway.com">Clarusway</a>';



//* ========================================
//*              QUERYSELECTOR()
//* ========================================
document.querySelector("title").textContent = "JS09-DOM 🍅"

const myPars = document.querySelectorAll("p");
console.log(myPars); //? NodeList(2) [p.par, p.par]
myPars.forEach((p) => console.log(p.innerText));

const myPars1 = document.getElementsByClassName('par');
console.log(myPars); //? HTML Collection

//! HTML Collection'dan Array' e çevirme yöntemleri
//? 1.Array.from()
const myParsArray = Array.from(myPars1); //? Array.from ile diziye çevirilir.
console.log(myParsArray); //! [p.par, p.par]
myParsArray.forEach((p) => console.log(p.innerText));

//? 2.Spread/rest
[...myPars1].forEach((p) =>console.log(p.innerText)) 
//! altında olan bütün textlerin hepsini diğer taglerin içindeki textlerindeki ni de getirir.


//! querySelector ile CSS vari seçim yapmak mümkündür.
//! CSS Selector'lerin hepsini kullanmak mümkündr.
console.log(document.querySelector("section p a"))