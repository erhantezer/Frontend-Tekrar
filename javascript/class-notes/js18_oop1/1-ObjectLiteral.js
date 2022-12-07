//* ===========================================
//*                 (OOPS)
//* ===========================================

//* Object Literals

const book1 = {
    baslik: { title: 'The Brothers Karamazov' },
    author: 'Dostoyevski',
    year: 1880,
    getSummary: function () {
        return `${this.baslik.title} was written by ${this.author} in ${this.year}`;
    },
};
const { baslik: { title }, author, year } = book1
console.log(title);
console.log(book1.getSummary());
console.log(book1.toString()); //! Object nesnesinden miras yoluyla geldi.

const book2 = {
    title: 'The lily of the valley',
    author: 'Honero de balzac',
    year: 1835,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year} `;
    },
};

console.log(book2);
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir.
//? (DRY - Dont Repeat Yourself)
//? Alternatif Cozum: Object Oriented Programming (ES5 and ES6)