import { createContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return <div></div>;
};

export default ProductProvider;
