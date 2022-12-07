//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountry = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    try {
        const res = await fetch(url)
        if(!res.ok){
            renderError(`Something went wrong:${res.status}`)
            throw new Error()
        }
        const data = await res.json()
        console.log(data[0])
        renderCountry(data[0])

    } catch (error) {
        console.log(error);
    }
};
;


const inputDiv = document.querySelector('.input');
const btnInp = document.querySelector('.btn');
btnInp.addEventListener("click", (e) =>{
    fetchCountry(inputDiv.value)
})

const renderCountry = (country) => {
    console.log(country);
    const countryDivs = document.querySelector('.countries');

    //!destr
    const {capital, name: {common},altSpellings, region, flags: {svg}, languages, currencies} = country;
    console.log(Object.values(languages));
    console.log(Object.values(currencies)[0].name);
    console.log(altSpellings[1]);

    countryDivs.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${svg}" class="card-img-top" alt="${altSpellings[1]}flag">
        <div class="card-body">
            <h5 class="card-title">${common}</h5>
            <p class="card-text">${region}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${capital}</li>
            <li class="list-group-item">${Object.values(languages)}</li>
            <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(currencies)[0].name} ${Object.values(currencies)[0].symbol}</li>
        </ul>
    </div>
    `
}
