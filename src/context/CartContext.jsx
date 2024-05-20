import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext;
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
