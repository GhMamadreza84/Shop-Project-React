import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../helper/Helper";
import { useCart } from "../context/CartContext";

import styles from "./Card.module.css";
const Card = ({ data }) => {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();
  console.log(state)
  const clickHandler = () => { 
    dispatch({ type: "ADD_ITEM", payload: data });
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={()=>clickHandler("ADD_ITEM")}>
            <TbShoppingBagCheck />
          </button>
          <button onClick={()=>clickHandler("ADD_ITEM")}>
            <MdDeleteOutline />
          </button>
          <button onClick={()=>clickHandler("ADD_ITEM")}>
            +
          </button>
          <button onClick={()=>clickHandler("ADD_ITEM")}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
