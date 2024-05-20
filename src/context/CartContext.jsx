import { useReducer, createContext, useContext } from "react";

const initialState = {};
const reducer = () => {};

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const result = useContext(CartContext);
  console.log(result);
};
export default CartProvider;
export { useCart };
