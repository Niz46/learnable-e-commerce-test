import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
// import { useNavigate } from 'react-router-dom';
import styles from '../../styles/cartbackground.module.css';
import background from '../../assets/background.jpeg';

function CartBackground() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/product')
      .then(res => res.json())
      .then(data => {
        const sampleProduct = data.products[0];
        setProduct(sampleProduct);
      });
  }, []);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      // navigate('/cart');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.cartBackground}>
      <img src={background} alt="" />
      <div className={styles["action-container"]}>
        <p className={styles["p-tag"]}>{product.brand}</p>
        <h2>{product.title}</h2>
        <p className={styles["p-tag2"]}>
          {product.description}
        </p>
        <h3>${product.price}</h3>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default CartBackground;