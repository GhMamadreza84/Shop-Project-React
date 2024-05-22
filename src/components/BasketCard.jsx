import { shortenText } from "../helper/Helper";

const BasketCard = ({data}) => {
  const {image,title}=data;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
    </div>
  );
}

export default BasketCard;