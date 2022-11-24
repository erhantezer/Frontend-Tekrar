// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

console.log("************ 5- RECURSION *************");

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamını hesaplayarak yazdıran fonksiyonu recursive olarak kodlayınız.
//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, ...

const fib = (n) => {
    if(n < 2) {
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

const n = +prompt("n. terimi giriniz:");

if(n <= 0) {
    console.log("Lütfen pozitif bir sayı giriniz")
} else {
    console.log(`FIBO(${n}) = ${fib(n)}`);
}