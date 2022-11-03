// let e = +prompt("bir sayı giriniz");
//! başına artı (+) işareti konulursa number algılanır
//! artı konduğunda iptale basılırsa  0 değerini alır
//! artı dğeri yokken iptale basılırsa null döndürür ve tipi object olur
// console.log(e);
// console.log(typeof(e))

// let i = 999_999_999_999_999;
// console.log(i)
// console.log(isNaN(i))


// let x;

// do {
//   x = prompt('Enter a Number :')
// } while (isNaN(x));

// console.log(x * x);


// console.log(015+025)

let userName = 'Mark';

let p = `Merhaba ${userName}`;
console.log(p)

const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
  }

  myCar.color="Red"
  myCar.sanroof =true;
  console.log(myCar);

  myCar.age = function (params) {
    console.log(params - this.year)
  }
  
  myCar.age(2022)

  delete myCar["sanroof"]
  console.log(myCar);