import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/productsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={<ProductsPage />} />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
