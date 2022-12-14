//* ========================== HOOKS ====================================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =====================================================================

import { useState } from "react"


const UseStateExample = () => {
 //* useState en cok kullanilan Hook'tur.
 //* Bir state'in degisken, dizi ve obje ile kullanilabilmesine olanak saglar
 //? useState hook'u 2 deger dondurur.
 //?  1.si state degiskenidir.
 //?  2.si ise state'i degistirmeye izin veren bir setter metodudur.
 //? useState parametre olarak state'in ilk degerini alir.

const [count, setCount] = useState(0); //! array destruc.

const [info, setInfo] = useState({
    name:"Ahmet YILMAZ",
    email: "ay@gmail.com",
    age:32,
})

const inc = () => {
    setCount(count+1)
}

const incAge = () => {
// setInfo(info.age + 1);
// console.log(info.age);
// setInfo({ name: 'mehmet yilmaz', email: 'my@gmail.com', age: 44 });
//? key:Value
setInfo({...info, age:info.age + 1}); //! açıp(spread) istediğimizi kullandık
}

    return (
        <div className="container text-center mt-4">
        <section>
            <h1 className="display-4 text-danger m-4">useState COUNT: {count}</h1>
            <button onClick={inc} className="btn btn-success">
                INC
            </button>
            <button onClick={() => setCount(count-1)} className="btn btn-dark ms-2">
                DEC
            </button>
            <button onClick={() => setCount(0)} className="btn btn-info ms-2">
                CLR
            </button>
        </section>

        <section>
            <h1 className="display-4 text-danger mt-4">USESTAE OBJECT</h1>
            <h2>{info.name}</h2>
            <h2>{info.email}</h2>
            <h2>{info.age}</h2>
            <button onClick={incAge} className="btn btn-secondary">
            Inc Age
            </button>
            <button onClick={() => setInfo({...info, age:info.age-1})} className="btn btn-primary ms-2">
                Dec Age
            </button>
        </section>

        </div>
    )
}

export default UseStateExample