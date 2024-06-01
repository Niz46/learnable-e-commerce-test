import Navbar from "../Navbar/navbar";
import Slide from "../Slider/Slider";
import Product from "../Product/product";
import Feature from "../Product/feature";
import Post from "../Product/post";
import Testimonial from "../Product/testimonial";
import CartBackground from "../Product/cartbackground";
import Footer from "../Footer/footer";

function Main() {
  return (
    <>
      <Navbar />
      <Slide />
      <Product />
      <Feature />
      <Post />
      <Testimonial />
      <CartBackground />
      <Footer />
    </>
  );
}

export default Main;
