import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import Product from "../ui/product";
import LoadMoreButton from "../ui/button";
import styles from "../../styles/productcontainer.module.css";

function ProductContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const INITIAL_DISPLAY_COUNT = 8;
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const showMore = () => {
    setDisplayCount(displayCount + 4);
  };

  const showLess = () => {
    setDisplayCount(Math.max(displayCount - 4, INITIAL_DISPLAY_COUNT));
  };

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.productContainer}>
      <Product
        products={products}
        title="Featured Products"
        subtitle="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
        displayCount={displayCount}
      />
      <div className={styles.btn}>
        {displayCount < products.length && (
          <LoadMoreButton onClick={showMore}>
            LOAD MORE PRODUCT
          </LoadMoreButton>
        )}
        {displayCount > INITIAL_DISPLAY_COUNT && (
          <LoadMoreButton onClick={showLess}>
            SHOW LESS PRODUCT
          </LoadMoreButton>
        )}
      </div>
    </div>
  );
}

export default ProductContainer;
