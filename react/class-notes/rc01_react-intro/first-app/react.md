<font style="color:red">1) Component Based</font> <br>
<font style="color:red">2) Babel</font> Yüksek versiyondaki js kodunu düşük versiyon js ye çevirmek. Babel bir javascript transcompilerdır. Yani javascript'in bir versiyonunda (örneğin EcmaScript7 ile yazılmış) yazılmış bir kodu, tüm tarayıcıların desteklediği EcmaScript5 koduna çevirmek için kullanılır. Bunun yanında reactjs vb.. çerçevelerin kullandığı JSX uzantılı dosyaları da EcmaScript5'e çevirebilmektedir <br>
<font style="color:red">3)React</font> yüksek veri dinamikleri için kullanılır ve hızlıdır,React.js Bildirimseldir,Test Kapasiteleri,SEO Dostu,
 Topluluk Desteği, Mobil Uyumluluk, Yeniden Kullanılabilir Bileşenler, istikrar<br>
 <font style="color:red">4) VIRTUAL DOM NORMAL DOM UN BELLEKTE(RAM) SAKLANMIŞ HALİ</font> normal dom maliyetli ve zaman kaybı sağlar.Dom esasen 2 adet kopyası oluşturulur 1. cisi virtual Dom 2. si updated virtual Dom dur yani snapshot virtual domdur snapshot virtual domda güncellemeler yapılır ve 1. virtual dom ile DİFF algoritmasında karşılşaştırılır değişikler asıl Dom da oluşturulur. <br>
 ![alt text](https://hakanyalitekin.files.wordpress.com/2019/03/dom2.png?w=900)<br>
 <font style="color:red">5) React elementlerini otomatik statik kabul eder değişen(dinamik) elementleri react a gösteriyoruz(state mantığı ile) amaç rendering i azaltmak</font> <br>
 (https://www.npmjs.com/)<br>
 cmd ye npm i -g yarn <br>
 Node js google chrome v8 js enjine local bilgisayarlarda çalıştırmamızı sağlıyor <br><br><br>
 REACT KURULUM<br>
 npx create-react-app my-app<br>
cd my-app<br>
npm start<br><br>
yada <br>
yarn create react-app . bulunduğu klasörde kurar.