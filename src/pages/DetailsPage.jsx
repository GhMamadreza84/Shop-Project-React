import { useParams } from "react-router-dom";
import { useProductDetils } from "../context/ProductContext";
import Loader from "../components/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const productDetails = useProductDetils(+id);
  if (!productDetails) return <Loader />;
  const { image, title, description, category } = productDetails;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
