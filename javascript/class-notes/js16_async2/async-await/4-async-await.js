//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu async hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

let hata = false;

const getUsers = async () => {
    const url = "https://api.github.com/users";
    try {
        const res = await fetch(url);
        if (!res.ok) {
            hata = true;
            // throw new Error(`Something went wrong:${res.status}`);
        }

        const data = await res.json()
        console.log(data)
        updateDom(data)

    } catch (error) {
        console.log(error);

    } finally {
        hata = false;
    }

}

getUsers();

const updateDom = (data) => {
    const usersDiv = document.querySelector('.users');

    if (hata) {
        usersDiv.innerHTML = `
        <h1 class="text-danger mt-4">Data Can Not Be Fetched</h1>
        <img src="./img/404.png" alt="" />
        `
    } else {
        data?.map((user) => {
            const { login, avatar_url, html_url,site_admin, id} = user;
            usersDiv.innerHTML += ` 
            <div class="card" style="width: 18rem;">
            <img src="${avatar_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">NAME:${login}</h5>
                <h3>HTML_URL:${html_url}</h3> 
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Admin: ${site_admin}</li>
                <li class="list-group-item">Id: ${id}</li>
            </ul>
            </div>
            `;

        });
    }
}
