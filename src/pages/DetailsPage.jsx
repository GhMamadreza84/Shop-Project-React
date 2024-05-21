import { Link, useParams } from "react-router-dom";
import { useProductDetils } from "../context/ProductContext";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const productDetails = useProductDetils(+id);
  if (!productDetails) return <Loader />;
  const { image, title, description, category, price } = productDetails;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
        <div>
          <span>{price} $</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
