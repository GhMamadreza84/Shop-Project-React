import { useProducts } from "../context/ProductContext";
const ProductsPage = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div>
      <h1>ProductsPage</h1>
    </div>
  );
};

export default ProductsPage;
