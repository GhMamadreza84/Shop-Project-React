import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  return (
    <div>
      <div>
        {state.selectedItems.map(product=><BasketCard key={product.id} data={product} />)}
      </div>
    </div>
  );
};

export default CheckoutPage;
