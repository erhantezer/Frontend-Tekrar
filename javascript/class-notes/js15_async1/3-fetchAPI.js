//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

fetch("https://api.github.com/users")
.then((res) => {
    //! error handling
    if(!res.ok) {
        throw new Error(`Something went wrong: ${res.status}`)
    }
    return res.json()
}).then((data) => updateDom(data))
.catch((err) => console.log(err))

const updateDom = (data) => {
    const usersDiv = document.querySelector(".users");

    console.log(data)

    data.map((user) => {
        console.log(user);
        //! destr
        const { login, avatar_url, html_url } = user;
        usersDiv.innerHTML += `
        <h2 class="text-primary mt-5">NAME:${login}</h2>
        <img src=${avatar_url} width="50%" alt="" />
        <h3 class="text-danger bg-secondary rounded-pill p-2 mt-2" >HTML_URL:${html_url}</h3>
        `
    })
}
