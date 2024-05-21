import { useParams } from "react-router-dom";
import { useProductDetils } from "../context/ProductContext";
import Loader from "../components/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const productDetails = useProductDetils(+id);
  if (!productDetails) return <Loader />;
  return <div>DetailsPage - {id}</div>;
};

export default DetailsPage;
