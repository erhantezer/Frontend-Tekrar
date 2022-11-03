

//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.
//? rafce, rfce, rfc vb.

const Footer = () => {
  return (
    <footer>
        Copyright by Clarusway, {new Date().toLocaleDateString()}
    </footer>
  )
};

export default Footer;