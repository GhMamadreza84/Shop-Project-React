import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/products">Gh Shop</Link>
        <Link to="/checkout">
          <PiShoppingCartSimpleBold />
        </Link>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
