import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/Helper";
import { useProducts } from "../context/ProductContext";
import { FaListUl } from "react-icons/fa";

import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
const ProductsPage = () => {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search)
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
