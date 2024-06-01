import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "../../styles/shopproduct.module.css";

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
        {products.slice(0, 8).map((product, index) => (
          <div key={index} className={styles["product-items"]}>
            <img src={product.thumbnail} alt={`Product ${index + 1}`} />
            <div className={styles.txt}>
              <h4>{product.category}</h4>
              <p className={styles.p}>{product.brand}</p>
              <div className={styles["product-number"]}>
                <p>{product.price}</p>
                <span>{product.discountPercentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
