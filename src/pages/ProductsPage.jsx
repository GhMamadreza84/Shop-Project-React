import { useProducts } from "../context/ProductContext";
const ProductsPage = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>sideBar</div>
    </div>
  );
};

export default ProductsPage;
