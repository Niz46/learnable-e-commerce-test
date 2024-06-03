import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import ShopProduct from "../Shop/showItem";
import CartSection from "./addcart";



function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <ShopProduct />
      <Footer />
    </>
  )
}

export default Cart;