import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { ImSearch } from "react-icons/im";

import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
const ProductsPage = () => {
  const products = useProducts();
  const [search, setSearch] = useState();
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." />
        <button>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>sideBar</div>
      </div>
    </>
  );
};

export default ProductsPage;
