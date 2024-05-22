import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import styles from "./Checkout.module.css"
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
        <h1 className={styles.empty}>Basket Card is Empty 😢</h1>
      )}
    </div>
  );
};

export default CheckoutPage;
