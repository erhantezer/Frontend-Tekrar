//* ======================================================
//*                        EVENTS
//* ======================================================

console.log('****** EVENTS *******');

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//? METHOD-3 (ONLY JAVASCRIPT)
//?--------------------------------------------------------
// document.getElementById("header").onclick = function () {
//     document.getElementById("header").style.color ="red";
// }

// const header =document.getElementById("header");
const header =document.querySelector("#header");

header.onmouseover = () => {
    header.style.color = "pink";
}
header.onmouseout = () => {
    header.style.color = "black";
}


//? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
//?-------------------------------------------------------

const myImg = document.querySelector("img");

// myImg.addEventListener("mouseover", () =>{
//     myImg.style.transform="translateY(5px)"
// })

// myImg.addEventListener("mouseout", () =>{
//     myImg.style.transform="translateY(-5px)"
// })

myImg.addEventListener('mouseover', () => {
    myImg.style.transform = 'scale(1.2, 1.4)';
});

myImg.addEventListener('mouseout', () => {
    myImg.style.transform = 'scale(1)';
});

//* -------------------------------------------------
//* EXAMPLE-2 (Button onclick)
//* -------------------------------------------------
const buton = document.querySelector("#btn");

let a = true
buton.addEventListener("click", function() {
    if(a){
        document.querySelector("body").style.backgroundImage = 
        "linear-gradient(to right, purple, yellow)";
        buton.innerText = "Search";
        a=false
    }else {
        document.querySelector("body").style.background= "white";
        buton.innerText = "click";
        a=true
    }

});