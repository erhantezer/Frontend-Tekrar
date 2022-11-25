// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log('******* STRING METHODS ********');

//! Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.
const str1 = 'Clarusway';
const str2 = ' Hello';
const str3 = ' World';

console.log(typeof str1);
const str4 = str1 + str2; //* String concat
console.log(str4);
console.log(str4 + str3);

console.log(str4.concat(str3))

//! Non-primitive String tanımlama
const str5 = new String('Non-primitive String');
console.log(str5, typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------
const s1 = 'hello';
const s2 = ' world';
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(' Clarusway', str2, ' Merhaba'));
console.log(s2, s3);

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------
console.log(s3.charAt()); //! 0.indexste bulunan char'ı getirir
console.log(s3.charAt(4)); //! o
console.log(s3.charAt(s3.length - 1)); //! d

//* ----------------------------------------------------------
//* includes() - case sentive
//* ----------------------------------------------------------

const  word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //!true
console.log(word.includes("That")); //!false
console.log(word.includes("")); //!true
console.log(word.includes("to be",14)); //!false
console.log(word.includes("to be",13)); //!true
console.log(word.includes(" ")); //!true

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------
const tobeIndex = word.indexOf("or");

console.log(tobeIndex); //! 6
console.log(word.indexOf('be')); //!3
console.log(word.lastIndexOf('be')); //!16
console.log(word.lastIndexOf('BE')); //!-1 olmayınca eksi 1 döndürür

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------
const word2 = 'Salına salına sinsice !';
console.log(word2.startsWith('sa')); //!false
console.log(word2.startsWith('sa', 7)); //! true
console.log(word2.endsWith('!')); //! true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma";
console.log(oku.replace("saf olma", "akıllı ol"));
oku = oku.replace('saf olma', 'akilli ol');
console.log(oku);

//* Detaylı değiştirme alternatifleri için regex kullanılabilir.
console.log(oku.replace(/AKILLI/i, 'Zeki'));


//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex]) dilim
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = 'Uzun ince bir yoldayım yürüyorum gündüz gece..';

console.log(veysel.slice(33), typeof veysel);//gündüz gece string
console.log(veysel.slice(17, 30)); // dayım yürüyor
console.log(veysel.slice(-10));//düz gece..
console.log(veysel.slice(-27, -19));//yım yürü
//! negatif indeks substring ile kullanılamaz.
console.log(veysel.substring(17, 30)); // dayım yürüyor.

//* ----------------------------------------------------------
//* split([sep [, limit] ]) bölmek ayırmak
//* ----------------------------------------------------------
const tarkan = 'Gel gündüzle gece olalım';
const splited = tarkan.split(" "); //! Boşluklara göre ayırdı Array' çevirdi
console.log(splited, typeof splited); //! ['Gel', 'gündüzle', 'gece', 'olalım'] 'object'
const gece = splited[2]; //* indisleme ile değer okunabilir.
console.log(gece);

const copyTarkan = tarkan.split();
console.log(copyTarkan); //* String'i array haline getirdi. (Tek elemanlı)

const copy = tarkan.split(""); //! herbir harfi ve boşluğu eleman olarak tek tek yazar
console.log(copy);//! ['G', 'e', 'l', ' ', 'g', 'ü', 'n', 'd', 'ü', 'z', 'l', 'e', ' ', 'g', 'e', 'c', 'e', ' ', 'o', 'l', 'a', 'l', 'ı', 'm']

//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

const youtube = ("https://www.youtube.com/watch?v=b7vfp5G4brE");
const splitedLink = youtube.split("=");
console.log(splitedLink);
const shortLink = `https://youtu.be/${splitedLink[1]}`;
console.log(shortLink)