import { createContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await api.get("/products"));
    };
  }, []);
  return <div></div>;
};

export default ProductProvider;
