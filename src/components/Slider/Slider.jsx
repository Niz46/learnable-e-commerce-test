import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
// import { nextSlide, prevSlide } from "../../features/apiSlice";
import { FaAngleRight } from "react-icons/fa";
// import { GoDotFill } from "react-icons/go";
import styles from "../../styles/slide.module.css";

function Slide() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [batchIndex, setBatchIndex] = useState(0);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const showNextBatch = () => {
    setBatchIndex((prevIndex) => prevIndex + 1);
  };

  const itemsPerBatch = 4;
  const start = batchIndex * itemsPerBatch;
  const end = start + itemsPerBatch;
  const displayedProducts = products.slice(start, end);

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (productStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.product}>
      <div className={styles["product-container"]}>
        {displayedProducts.map((product, index) => (
          <div key={index} className={styles[`furniture-content`]}>
            <div>
              <img
                src={product.thumbnail}
                className={styles.image}
                alt={`Product ${index + 1}`}
              />
            </div>

            <div className={styles[`furniture-item`]}>
              <p>{product.stock} Item</p>
              <h2>{product.category.toUpperCase()}</h2>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles["btn-grp"]}>
        <button onClick={() => dispatch(prevSlide())}>
          <GoDotFill />
        </button>
        <button onClick={() => dispatch(nextSlide())}>
          <GoDotFill />
        </button>
      </div> */}
      {(batchIndex + 1) * itemsPerBatch < products.length && (
        <button onClick={showNextBatch} className={styles.showMore}>
          <FaAngleRight />
        </button>
      )}
    </div>
  );
}

export default Slide;
