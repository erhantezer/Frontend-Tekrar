console.log('**** app.js *******');

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");
const dilSection =document.getElementById("dil-section");


const ul =document.createElement("ul");
dilSection.appendChild(ul)


//? SELECTORS
//************************************************* */
console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);
console.log(dilSection.parentElement.parentElement);

const divContainer = ul.closest(".container");
console.log(divContainer)

// const h1 = ul.closest(".container").firstChild;
const h1 = ul.closest(".container").firstElementChild;
console.log(h1)
console.log(h1.textContent)
h1.style.color = 'red';

//?container class ı içerisindeki btn class'ına ait olan elementleri arar.
const buttons = ul.closest(".container").querySelectorAll(".btn")
console.log(buttons); //! NodeList(2) [button#ekle.btn.btn-success, button#sil.btn.btn-danger]
//************************************************* */


ekleBtn.addEventListener("click", (e) => {
    if(!dilInput.value){
        alert("Please Enter a Value")
    } else {
        ul.innerHTML = `<li>${dilInput.value}</li>`;
        dilInput.value = "";
    }
    
});

silBtn.addEventListener("click", () => {
    ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert('Silinecek dil kalmadi');

    //! Alternatif çözüm
    // if(!dilSection.innerText) {
    //     alert("No value to delete")
    // } else {
    //     ul.removeChild(ul.lastElementChild)
    // }
})
