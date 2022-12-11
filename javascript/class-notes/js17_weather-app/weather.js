console.log("********* WEATHER APP **********");

const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".top-banner input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherDataFromApi();
});

const inputVal = input.value
const tokenKey = "304f6561606799321d6d4fb27fe0eeb9"
const getWeatherDataFromApi = async () => {


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
        const response = await axios(url)
        const { name, main, sys, weather } = response.data; //! destructring

    } catch (error) {
        msg.innerText = error;
        setTimeout(() => {
            msg.innerText =""
        }, 5000);
    }
}
