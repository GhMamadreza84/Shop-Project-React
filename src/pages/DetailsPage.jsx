import { Link, useParams } from "react-router-dom";
import { useProductDetils } from "../context/ProductContext";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css"

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
        <p>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span>
            <IoMdPricetag />
            {price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
