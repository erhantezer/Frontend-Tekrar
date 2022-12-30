import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aws from "./pages/Aws";
import Contact from "./pages/Contact";
import FullStack from "./pages/FullStack";

import Home from "./pages/Home";
import InstructorDetail from "./pages/InstructorDetail";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";

//* İc ice sayfalari gsotermek icin Nested Route kullanilabilir.

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapılan bir
//? componentlerdir. (Nav v.b)

//? Navigate sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirmesi icin kullanilir. (v5 -> Redirect)

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <BrowserRouter >
    <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="instructors" element={<Instructors/>}/>
          <Route path="instructors/:id" element={<InstructorDetail/>}/>

          {/* Nested Route /* içerisinde çağrılıyor */}
          <Route path="paths" element={<Paths/>}>
          <Route index element={<FullStack/>}/>
          <Route path="fullstack" element={<FullStack/>}/>
          <Route path="aws" element={<Aws/>}/>
          </Route>

          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
