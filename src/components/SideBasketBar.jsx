import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import styles from "./SideBasketBar.module.css"
const SideBasketBar = ({ state,clickHandler }) => {
  return (
    <div>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{state.total.toFixed(2)} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity : </p>
        <span>{state.quantity}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status :</p>
        <span>{!state.checkout && "Pending ..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
};

export default SideBasketBar;
