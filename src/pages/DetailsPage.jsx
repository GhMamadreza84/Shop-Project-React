import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const {id} = useParams()
  const productDetails = useProduc
  return (
    <div>
      DetailsPage - {id}
    </div>
  );
}

export default DetailsPage;