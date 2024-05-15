import { useProducts } from "../context/ProductContext";
const ProductsPage = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div>
      <div>
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>sideBar</div>
    </div>
  );
};

export default ProductsPage;
