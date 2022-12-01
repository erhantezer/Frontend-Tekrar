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