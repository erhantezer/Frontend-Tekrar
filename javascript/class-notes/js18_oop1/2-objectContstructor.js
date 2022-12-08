//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date and Array nesneleri Object.prototype'dan miras almaktadir.

//! Object Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
};
console.log(Book);


//? new keyword'u Book Constructor'ini parametereler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'a da hayat bulmus olur.

//! instance
const book1 = new Book('Kasagı', 'Omer Seyfettin', 1920);
console.log(book1);
console.log(book1.getSummary());
book1.price = 100;

const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
console.log(book2.getSummary());

console.log(book1, book2);

//! Eger yeni bir property veya fonksiyonu constructor'a eklemek istersek
//! prototype'ı kullanabiliriz.