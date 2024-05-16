import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42" />
    </div>
  );
}

export default Loader;