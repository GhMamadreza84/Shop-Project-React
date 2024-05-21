import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/products">Gh Shop</Link>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
