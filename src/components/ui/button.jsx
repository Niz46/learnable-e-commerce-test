import PropTypes from "prop-types";
import styles from "../../styles/button.module.css";

function LoadMoreButton({ onClick, children }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadMoreButton;
