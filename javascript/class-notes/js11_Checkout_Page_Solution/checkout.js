
console.log("******** CHECKOUT ********");

const taxRate = 0.18; //! vergi oranı
const shippingPrice = 15.0; //! kargo ücreti

//! ekran her açılıp kapandığında yenilendiğinde verileri kayıt edecek bakınız incele içinde Application
window.onload = function () {
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    sessionStorage.setItem("taxRate", taxRate)
    sessionStorage.setItem("shippingPrice", shippingPrice)

     //add after func. coding
};

//capturing vs. bubbling
