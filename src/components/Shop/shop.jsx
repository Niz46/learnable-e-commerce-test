import Navbar from "../Navbar/navbar";
import Carddisplay from "./carddisplay";
import ArticleSection from "./productdisplay";
import Product from "./shopproduct";
import Footer from "../Footer/footer"
import SponsorSection from "./sponsor";


function Shop() {
  return (
    <>
      <Navbar />
      <Carddisplay />
      <ArticleSection />
      <Product />
      <SponsorSection />
      <Footer />
    </>
  )
}

export default Shop;