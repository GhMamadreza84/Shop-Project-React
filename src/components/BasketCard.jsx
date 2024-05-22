import { shortenText } from "../helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
const BasketCard = ({ data }) => {
  const { image, title, price, quantity,clickHandler } = data;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{price}</p>
      <div>
        {quantity === 1 && (
          <button onClick={()=>clickHandler("REMOVE_ITEM",data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && <button onClick={()=>clickHandler("DECREASE",data)}>-</button>}
        <span>{quantity}</span>
        <button onClick={()=>clickHandler("INCREASE",data)}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
