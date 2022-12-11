console.log("********* WEATHER APP **********");

const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".top-banner input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem("apiKey", EncryptStringAES("304f6561606799321d6d4fb27fe0eeb9"))


form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherDataFromApi();
});




const getWeatherDataFromApi = async () => {

    let tokenKey = DecryptStringAES(localStorage.getItem('apiKey'));
    let inputVal = input.value;
    let unitType = 'metric';
    // let lang = 'tr';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${tokenKey}&units=${unitType}`;

    try {
        //! fetch-then
        // fetch(url)
        // .then((res) => {
        //! error handling
        //     if(!res.ok) {
        //         throw new Error(`Something went wrong: ${res.status}`)
        //     }
        //     return res.json()
        // }).then((data) => updateDom(data))
        // .catch((err) => console.log(err))

        //! async-await
        // const res = await fetch(url)
        // if (!res.ok) {
        //     throw new Error(`Something went wrong:${res.status}`);
        // }
        // const data = await res.json()
        // console.log(data);

        //! axios (paketide html içinde yükledik)
        //axios.get(url) == axios(url)
        const response = await axios(url)
        const { name, main, sys, weather } = response.data; //! destructring
        console.log(response.data)
        let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;


        //! tekrar tekrar aynı şehri yazmasın diye filtreleme yaptık 
        //forEach => array + nodeList
        //map, filter, reduce => array
        const cityListItems = list.querySelectorAll('.city');
        const cityListItemsArray = Array.from(cityListItems);
        if (cityListItemsArray.length > 0) {
            const filteredArray = cityListItemsArray.filter(
                (cityCard) => cityCard.querySelector('span').innerText == name
            );
            // console.log(cityListItemsArray.length);
            if (filteredArray.length > 0) {
                msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
                setTimeout(() => {
                    msg.innerText = '';
                }, 5000);
                form.reset();
                return;
            }
        }

        //! card oluşturduk içine data içindeki verileri bastık ardından yukarıda 
        //! filtrelemek önemli çünkü kod bir kere çalıştıktan sonra geçerli olacak akisi 
        //! halde boş filtreleme yapıp aynı değeri sürekli yazar
        const createdLi = document.createElement("li");
        createdLi.classList.add("city");
        const createdLiInnerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">  <span>${name}</span> <sup>${sys.country}</sup> </h2>

                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>

                <figure>
                    <img class="city-icon" src="${iconUrl}">
                    <figcaption>${weather[0].description}</figcaption>
                </figure>`;
        createdLi.innerHTML = createdLiInnerHTML;
        //append vs. prepend
        list.prepend(createdLi); //! herbir ul(list) içine son yazdığımız li ler önüne gelsin



    } catch (error) {
        msg.innerText = error;
        setTimeout(() => {
            msg.innerText = ""
        }, 5000);
    }
}
