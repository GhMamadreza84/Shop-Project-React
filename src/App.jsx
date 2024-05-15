import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Product} />
      </Routes>
    </>
  )
}

export default App
