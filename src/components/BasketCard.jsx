import { shortenText } from "../helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
const BasketCard = ({ data }) => {
  const { image, title, price, quantity } = data;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{price}</p>
      <div>
        {quantity === 1 && (
          <button>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && <button>-</button>}
        <span>{quantity}</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
