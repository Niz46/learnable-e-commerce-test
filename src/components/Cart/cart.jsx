import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Product from "../Shop/shopproduct";
import CartSection from "./addcart";



function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <Product />
      <Footer />
    </>
  )
}

export default Cart;