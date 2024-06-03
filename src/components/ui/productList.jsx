import { useFetchProductsQuery } from "../../features/productApi";
import ProductCart from "./productCard";

const ProductsList = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
