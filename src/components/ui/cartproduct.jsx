import PropTypes from "prop-types";
import styles from "../../styles/cartproduct.module.css";
import star from "../../assets/Group 5.svg";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";

const ProductCart = ({ product }) => {
  if (!product) {
    return <div>Product data is missing</div>;
  }

  return (
    <div className={styles["productCart-Container"]}>
      <div className={styles["productCart-content-1"]}>
        <img src={product.thumbnail} alt={product.title} />

        <h4>{product.category}</h4>

        <div className={styles["likeShare-Container"]}>
          <p>{product.discountPercentage}%</p>

          <div className={styles["likeShare-icon"]}>
            <div className={styles.share}>
              <LuGitCompare />
            </div>
            <div className={styles.share}>
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["productCart-content-2"]}>
        <h4>{product.brand}</h4>
        <p className={styles.text}>{product.title}</p>
        <p className={styles.priceTag}>€ {product.price}</p>

        <div className={styles.icons}>
          <img src={star} alt="Star rating" />

          <div className={styles["rate-number"]}>
            <span>{product.rating}</span>
            <span>({product.stock})</span>
          </div>
        </div>
      </div>

      <div className={styles["productCart-content-3"]}>
        <button>ADD TO BASKET</button>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCart;
