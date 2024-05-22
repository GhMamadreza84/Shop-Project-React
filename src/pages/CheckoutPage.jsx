import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import styles from "./Checkout.module.css";
import empty from "../assets/empty.jpg"
const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  return (
    <div>
      {state.selectedItems.length ? (
        <div>
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h1 >Basket Card is Empty 😢</h1>
          <img src={empty} alt="empty" />
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
