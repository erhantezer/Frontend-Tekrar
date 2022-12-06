//* =================================================
//*                     IOS CALCULATOR
//* =================================================
//? Ekranlar
const prevDisp = document.querySelector('.previous-display');
const currDisp = document.querySelector('.current-display');

//?Button container (capturing metodu ile)
const btnContainer = document.querySelector('.buttons-container');



//! capturing uygularsak 
//? Butonlari tasiyan container icin event tanimlamasi
btnContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")) {
        // currDisp.innerText=e.target.innerText
        appendNumber(e.target.innerText)
    }
    // console.log(e.target.classList.contains("num"));
    // console.log(e.target.innerText)

    if (e.target.classList.contains("operator")) {
        
    }
})