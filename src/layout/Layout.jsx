import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css"
const Layout = ({ children }) => {
  const [s] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Gh Shop</Link>
        <Link to="/checkout">
          <PiShoppingCartSimpleBold />
          {!!s.itemsCounter && <span>{s.itemsCounter}</span>}
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Created By GhMamadreza With 🧡</footer>
    </>
  );
};

export default Layout;
