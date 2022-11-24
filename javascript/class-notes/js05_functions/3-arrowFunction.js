// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log('****** 3- ARROW FUNCTIONS ******');

//* Örnek1:
//*************************************************************/

const topla = (x,y) => x+y
console.log(topla(8,9));
//! Arrow fonksiynlarda eğer tek bir ifade kullanılrsa süslü paranteze
//! ihtiyaç olmaz ve dolayısla return gerekmek. aksi takdirde gerekir.

const usAl = (a,b) => {
    return a**b;
}
console.log(usAl(2,3));

const usAl2 = (t, u) => t**u;
console.log(usAl2(3,4));

// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız. Ve lazımsa return yapmalıyız.
const menu = (times) => {
    console.log('============================');
    console.log(' JAVASCRIPT ÇOK KOLAYMIŞ');
    console.log('============================');
    return times * 2;
  };
  
  console.log(menu(2));

//* Örnek2:
//*************************************************************/

// const tekMi = (n) => (n % 2 === 1 ? "TEKTIR" : "CIFTTIR");
const tekMi = (n) => (n % 2 ? "TEKTIR" : "CIFTTIR")

console.log(tekMi(3))


//* Örnek3:
//*************************************************************/

const r = +prompt("yarıçapı giriniz");
const h = +prompt("yükseklik giriniz");

const hacimHesapla = (r,h) => Math.PI * r * r * h;

console.log('Silindirin hacmi :', Math.trunc(hacimHesapla(r, h)));
console.log('Silindirin hacmi :', hacimHesapla(r, h).toFixed(1));