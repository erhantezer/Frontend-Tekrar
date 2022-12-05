//* ======================================================
//*                     TODO APP
//* ======================================================

//? Selectors
const btn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

//! Baslangicta input aktif olsun
// window.onload = function () {
//     todoInput.focus();
// }
window.addEventListener("load", () =>{
    todoInput.focus()
})

//! Add Buton Event'inin tanimanmasi
btn.addEventListener("click", (e) => {
    if(!todoInput.value) {
        alert("Please Enter TO-DO")
    }else {
        todoUl.innerHTML += `  <li>
        <i class="fa fa-check"></i>
        <p>${todoInput.value}</p>
        <i class="fa fa-trash"></i>
        </li>`;
    }
    todoInput.value = "";
    
})

//! Klavyeden enter tusuna basilmasi ile add butonunun click fonksiyonunun cagrilmasi
todoInput.onkeydown = function (e) {
    if(e.key ==="Enter") {
        btn.click()
    }
    // console.log(e)
}

//! delete ve ok butonları için event tanimlamasi
todoUl.addEventListener("click", (e) => {
    //!Event, sil butonlarının birisinden geldi ise
    if(e.target.classList.contains("fa-trash")) {
        //! ilgili li elementini silerek DOM'u güncelle
        e.target.parentElement.remove();
        // e.target.closest("li").remove();
    }

    //! Event, check butonundan geldi ise
    if(e.target.classList.contains("fa-check")){
        if(e.target.parentElement.classList.contains("checked")){
            e.target.parentElement.classList.remove("checked")
        }else {
            e.target.parentElement.classList.add("checked")
        }
    }
    
})


