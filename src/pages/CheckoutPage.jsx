import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";

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
        <h1>Basket Card is Empty 😢</h1>
      )}
    </div>
  );
};

export default CheckoutPage;
