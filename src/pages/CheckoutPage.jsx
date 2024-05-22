import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  return (
    <div>
      <div>
        {state.selectedItems.map(product=><p>{product.title}</p>)}
      </div>
    </div>
  );
};

export default CheckoutPage;
