import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "../../styles/product.module.css";

function Product() {
  const INITIAL_DISPLAY_COUNT = 10;
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const showMore = () => {
    setDisplayCount(displayCount + 5);
  };

  const showLess = () => {
    setDisplayCount(Math.max(displayCount - 5, INITIAL_DISPLAY_COUNT));
  };

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.product}>
      <div className={styles["product-txt"]}>
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className={styles["product-content"]}>
        {products.slice(0, displayCount).map((product, index) => (
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

        <div className={styles.btn}>
          {displayCount < products.length && (
            <button onClick={showMore}>LOAD MORE PRODUCT</button>
          )}
          {displayCount > INITIAL_DISPLAY_COUNT && (
            <button onClick={showLess}>SHOW LESS PRODUCT</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
