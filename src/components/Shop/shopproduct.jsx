import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "../../styles/shopproduct.module.css";
import ProductCart from "../ui/cartproduct";

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.product}>
      <div className={styles["product-txt"]}>
        <h3>BESTSELLER PRODUCTS</h3>
      </div>
      <div className={styles["product-content"]}>
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className={styles["product-items"]}>
            <ProductCart product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
