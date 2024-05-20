import { useReducer, createContext, useContext } from "react";

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      
      break;
  
    default:
    throw new Error("Invalid Action !")
      
  }
};

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
  const {state, dispatch} = useContext(CartContext);
  return [state, dispatch];
};
export default CartProvider;
export { useCart };
