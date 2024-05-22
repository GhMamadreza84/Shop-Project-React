import { shortenText } from "../helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
const BasketCard = ({ data }) => {
  const { image, title, price, quantity } = data;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{price}</p>
      <div>{quantity === 1 && <MdDeleteOutline />}</div>
    </div>
  );
};

export default BasketCard;
