import { useParams } from "react-router-dom";
import { useProductDetils } from "../context/ProductContext";

const DetailsPage = () => {
  const {id} = useParams()
  const productDetails = useProductDetils(+id)
  return (
    <div>
      DetailsPage - {id}
    </div>
  );
}

export default DetailsPage;