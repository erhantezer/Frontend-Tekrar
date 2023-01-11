import { useCallback, useEffect, useMemo, useState } from "react";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser(data)
      })
  }, [])

// const filteredData = user?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
// console.log(filteredData)
//! useMemo ve memo birlikte kullanılmalı card tı memo ile sarmalladık
const filteredData = useMemo(()=>{
  console.log("useMemo çalıştı")
  return user?.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()));
  },[user,search])

const handleClick = () => {
  setSearch(text)
}

const handleClear = useCallback(() => {
  setText("");
  setSearch("")
},[])


  return (
    <div className="container mt-2">
      <div>
        <Header count={count < 4 ? 0 : count}/>
        
        <HeaderMemo count={count < 4 ? 0 : count}/>
      </div>
      
      <div>
        <p>{count}</p>
        <button className='btn btn-danger' onClick={() => setCount(count + 1)}>
        Increment
        </button>
      </div>
    
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input 
        type='text' 
        value={text}
        //! onChange={({target}) => setText(target.value)}
        onChange={(e) => setText(e.target.value)}
        />
        <button type='button' onClick={handleClick}>Search</button>
      </div>
      <div className="row">
        <Card data={filteredData} />
      </div>
      
      <ClearButton handleClear={handleClear}/>
      <h1>useRef</h1>
    </div>
  );
}

export default App;

// stateler her değiştiğinde component render olacağı için alt componentler de 
// yeniden oluşturulur. bunu önlemenin yolu react memo kullanmak. memo bize sadece 
// ilgili componente gönderilen değer değiştiğinde sardığı componenti tekrar render ettirir. 
// faydasız kaldığı yer object tipli verilerdir. onu engellemenin yolu da useMemo kullanmak 

//!useMemo
// Shallow comparison’da eğer karşılaştırılan tipler nesne (Object) ise içerisindeki
 // değerleri değil referans değerleri karşılaştırılır. Eğer karşılaştırılan nesneler
 // memory’de aynı adresi gösteriyorsa true göstermiyorsa false olarak değer döndürür.

// Input alanına bir değer girdiğimiz zaman App.js tekrar render edildiği için 
// filteredData tekrar oluşur. filteredData tekrardan oluştuğu için Card componentine 
// göndermiş olduğumuz data her seferinde farklı bir adrese sahip olur. Bu yüzdende 
// React.memo Card componentine ilk seferde göndermiş olduğumuz data array’inin tutulduğu 
// adres ile render edildikten sonra gelen data array’inin farklı adreste bulunduğunu gördüğü 
// için CArd componentini tekrar render eder. Props olarak verdiğimiz array değişmediği halde 
// Card componentinin render edilmesini engelleyebilmek için useMemo kullanabiliriz.
