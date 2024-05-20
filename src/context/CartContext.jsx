import { useReducer, createContext } from "react";

const initialState = {};
const reducer = () => {};

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>;
};

export default CartProvider;
